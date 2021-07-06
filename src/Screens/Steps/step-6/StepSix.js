import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import "./StepSix.css";
import endPoints from "../../../globals/Constants";
import {Row,Col} from "react-bootstrap";
import { Images } from '../../../assets/Assets';
import CircularProgress from "@material-ui/core/CircularProgress";
import jwt_decode from "jwt-decode";
import { Modal} from "react-bootstrap";
import {BiError} from "react-icons/all";

//  Components
import Button from "../../../components/Button/Button";
const StepSix = (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        console.log(props.history);
    },[])
    var email;
    const userToken = useSelector((state) => state.user.token);
    const [checkActionPlanSpinner, setCheckActionPlanSpinner] = useState(false);
    const [DisableBtn, setDisableBtn] = useState(false);
    const [calendlyParameters, setCalendlyParameters] = useState("");
    var decToken = jwt_decode(userToken);
    email = decToken.email;
    const checkPaid = () => {
        setCheckActionPlanSpinner(true);
        setDisableBtn(true);
        // const diagnosticId = props.data.diagnosticId || props.data.id;
        
        const diagnosticId = props.state.diagnosticId || props.state.id || props.state.data.diagnosticId || JSON.parse(localStorage.getItem("riskName")).diagnosticId;
        fetch(`${endPoints.CHECK_ACTION_PLAN_PAID_FOR}`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userToken}`,
            },
            body: JSON.stringify({
                DiagnosticId:props.state.serialNo,
                Email: email,
              }),
          })
          .then((res) => res.json())
          .then(async (response) => {
              debugger;
            if(response.paidFor === true){
                // console.log(response);
                // let firstResponse = await response.json();
                // console.log(firstResponse.checkIfUserPaidForDiagnostic);
                props.history.history.push(`/mes-diagnostics/${diagnosticId}`)
                setCheckActionPlanSpinner(false);
                setDisableBtn(false);
                // if(!firstResponse.checkIfUserPaidForDiagnostic.isPaid){
                //     setShow(true);
                // }else{
                //     props.history.history.push(`/mes-diagnostics/${diagnosticId}`)
                //     // props.history.history.push(`mes-diagnostics/${diagnosticId}`)
                // }
            }
            else{
                setShow(true);
                setCalendlyParameters("?email="+email+"&a2="+props.state.serialNo+"")
                console.log("erroooorrrr");
                setDisableBtn(false);
                setCheckActionPlanSpinner(false);
            }
          })
            
            .catch((error) => {
                
                console.log("api error", error);
                setCheckActionPlanSpinner(true);
                setDisableBtn(false);
            })
    }

    const handleClose = () => setShow(false);

    return (
        <>
        <div className="step-six-content">
        <div
          className="step-six-content-container">
            {checkActionPlanSpinner && (
                <div className="spinner">
                  <CircularProgress className="circular-spinner-blue" />
                </div>)}
         <Row>
             <Col>
                <div className="step-six-content-header">
            Vous avez pris connaissance de vos risques :
                </div>
             </Col>
         </Row>
            <Row style={{justifyContent:"center",marginTop:"7rem"}}>

                {/* <div className="col-md-2 align-content-center border-top border-bottom border-left border-warning" style={{paddingTop:"5rem",paddingBottom:"5rem"}}>
                   
                </div> */}
                <div className="col-md-6 align-content-center card-text border border-warning d-flex justify-content-center">
                <img src={Images.Icon_calender_two} className="pr-5 mx-5"/>
                <div className="mr-2">
                Commandez votre plan d’action immédiatement et 
                    découvrez comment maîtriser vos risques :
                </div>
                </div>
                <div className="col-md-3 border border-warning" style={{padding:"3rem 2rem",borderRadius: "0 1rem 1rem 0",textAlign:"center"}}>
                    <div className="card-text-price pb-3">
                        89€ HT
                    </div>
                    <Button tertiary onClick={checkPaid} disabled={DisableBtn}>
                            Plan d’action
                    </Button>
                </div>

            </Row>

        </div>
        </div>
            <Modal show={show} onHide={handleClose} className="custom-modal-3">
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <div className="text-center"><BiError size={40} /></div>
              <div className="py-2 text-center">Afin de voir le plan d'action, merci de prendre RDV sur ce lien <span><a rel="noreferrer" className="calendly-link" target="_blank" href={`${endPoints.calendlyLink+calendlyParameters}`}>Calendly</a></span></div>
            </Modal.Body>
            <Modal.Footer>
              <div className="text-center w-100">
              <div className="login-modal-btn">
                  <a target="_blank" href={`${endPoints.calendlyLink+calendlyParameters}`}>
                  <Button variant="secondary"> 
                    Ouvrir le lien
                  </Button>
                   </a>
              </div>
              </div>
              {/* onClick={handleClose} */}
            </Modal.Footer>
          </Modal>
          </>

    )
}

export default StepSix
