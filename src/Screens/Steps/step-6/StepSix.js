import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import "./StepSix.css";
import endPoints from "../../../globals/Constants";
import {Row,Col} from "react-bootstrap";
import { Images } from '../../../assets/Assets';
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
    var userId;
    const userToken = useSelector((state) => state.user.token);
    var decToken = jwt_decode(userToken);
    userId = parseInt(decToken.Id);
    const checkPaid = () => {

        // const diagnosticId = props.data.diagnosticId || props.data.id;
        
        const diagnosticId = props.state.diagnosticId || props.state.id || props.state.data.diagnosticId || JSON.parse(localStorage.getItem("riskName")).diagnosticId;
        fetch(`http://localhost:51160/api/v1/diagnosticEvaluation/get/CheckIfUserDiagnosticEvaulationIsPaidFor/${userId},${diagnosticId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userToken}`,
            },
          })
          .then(async (response) => {
            if (response.status === 200) {
                console.log(response);
                let firstResponse = await response.json();
                console.log(firstResponse.checkIfUserPaidForDiagnostic);
                if(!firstResponse.checkIfUserPaidForDiagnostic.isPaid){
                    setShow(true);
                }else{
                    props.history.history.push(`/mes-diagnostics/${diagnosticId}`)
                    // props.history.history.push(`mes-diagnostics/${diagnosticId}`)
                }
            }
            else{
                console.log("erroooorrrr");
            }
          })
            
            .catch((error) => console.log("api error", error))
    }

    const handleClose = () => setShow(false);

    return (
        <>
        <div className="step-six-content">
        <div
          className="step-six-content-container">
         <Row>
             <Col>
                <div className="step-six-content-header">
            Vous avez pris connaissance de vos risques :
                </div>
             </Col>
         </Row>
            <Row style={{justifyContent:"center",marginTop:"10rem"}}>

                {/* <div className="col-md-2 align-content-center border-top border-bottom border-left border-warning" style={{paddingTop:"5rem",paddingBottom:"5rem"}}>
                   
                </div> */}
                <div className="col-md-6 p-5 align-content-center card-text border border-warning d-flex justify-content-center">
                <img src={Images.Icon_calender_two} className="px-5 mx-5"/>
                <div className="mr-5">
                Commandez votre plan d’action immédiatement et 
                    découvrez comment maîtriser vos risques :
                </div>
                </div>
                <div className="col-md-3 border border-warning" style={{padding:"3rem 5rem",borderRadius: "0 1rem 1rem 0"}}>
                    <div className="card-text-price pb-3">
                        89€
                    </div>
                    <Button secondary className="inprogress-btn" onClick={checkPaid}>
                            Plan d’action
                    </Button>
                </div>

            </Row>

        </div>
        </div>
            <Modal show={show} onHide={handleClose} className="custom-modal-2">
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <div className="text-center"><BiError size={40} /></div>
              <div className="py-2 text-center">Afin de voir le plan d'action, merci de prendre RDV sur ce lien <span><a rel="noreferrer" className="calendly-link" target="_blank" href="https://calendly.com/">Calendly</a></span></div>
            </Modal.Body>
            <Modal.Footer>
              <div className="text-center w-100">
              <div className="login-modal-btn">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              </div>
              </div>
             
            </Modal.Footer>
          </Modal>
          </>

    )
}

export default StepSix
