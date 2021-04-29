import React, { useState, useEffect } from "react";
import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";
import "./StepThree.css";
import endPoints from "../../../globals/Constants";
import jwt_decode from "jwt-decode";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useSelector, useDispatch} from "react-redux";
//import { debugger } from "fusioncharts";

// const questions = [
//   {
//     id: 0,
//     heading: "First Question",
//     question: "This is first question ?"
//   },
//   {
//     id: 1,
//     heading: "Second Question",
//     question: "This is Second question ?"
//   },
//   {
//     id: 2,
//     heading: "Third Question",
//     question: "This is Third question ?"
//   },
//   {
//     id: 3,
//     heading: "Fourth Question",
//     question: "This is Fourth question ?"
//   }
// ]

const StepThree = (props) => {
  const [boxes, setBoxes] = useState([
    {
      answer: "1",
      resp: "resp1",
    },
    {
      answer: "2",
      resp: "resp2",
    },
    {
      answer: "3",
      resp: "resp3",
    },
    {
      answer: "4",
      resp: "resp4",
    },
    {
      answer: "5",
      resp: "resp5",
    },
    {
      answer: "6",
      resp: "resp6",
    },
    {
      answer: "7",
      resp: "resp7",
    },
  ]);
  const [activeIndex, setActiveIndex] = useState("");
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [activeQuestionId, setActiveQuestionId] = useState(null);
  const [activeAnswer, setActiveAnswer] = useState("");
  const [spinner, setSpinner] = useState(true);
  const [answerArr, setAnswerArr] = useState([]);
  const [totalCount, setTotalCount] = useState(null);
  const [test, setTest] = useState(false);
  const [diagEvalId, setDiagEvalId] = useState(0);
  const [isBack, setIsBack] = useState(false);
  const [sendData, setSendData] = useState({});

  const userToken = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  // var activeProgress = props.now;
  var progressPerQuestion = 73 / totalQuestions;
  // console.log("divide", progressPerQuestion);
  // console.log("total", totalQuestions);



  async function getAllQuestions() {
    const { diagnosticId } = props.data;
    var decoded = jwt_decode(userToken);
    const id = parseInt(decoded.Id);
    // console.log(token);
    await fetch(`${endPoints.GET_QUESTIONS}/${diagnosticId},${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("final",result);
        setQuestions(result.riskList);
        setTotalCount(result.totalQuestions);
        console.log(result);
        setDiagEvalId(result.riskList[0].diagnosticEvaluationID);

        // const activeQ = result.riskList[activeQuestionIndex];
        // Object.keys(activeQ).filter((key) => {
        //   if(activeQ[key].includes("resp")){

        //   }
        // })
        var completeCount = 0;
        result.riskList.map((item,i) => {
            if(item.isCompleted === true){
              completeCount = completeCount + 1
            }
        })
        var ind;
        // for(let i = 0; i < result.riskList.length; i++){
        //   if(result.riskList[i].isCompleted === false){
        //     console.log(i)
        //     ind = i
        //     break;
        //   }
        // }

        for( let c = 0; c < result.riskList.length; c++){
          if(result.riskList[c].isCompleted === false){
            ind = c;
            break;
          }
        }
        
        // result.riskList.find((item,index) => {

        //   if(item.isCompleted === false){
        //     console.log(index)
        //     return ind = index;
        //   }
         
        // });

        
        // for(let b = 0; b < result.riskList.length; b++){
        //   if(result.riskList[b].isCompleted === true){
        //     completeCount = completeCount + 1;
        //   }
        // }
        
        console.log("active question index is ",ind);
        setActiveQuestionIndex(ind);
        setTotalQuestions(result.totalQuestions);
        console.log("total ", result.totalQuestions);
        console.log("remaining ", result.riskList.length );
        setSpinner(false);
        console.log(activeQuestionIndex);
        if(result.riskList.length === 0){
            props.changeStepper(80);
            console.log("error");
        }
        else {
         
        console.log("complete count ", completeCount);
        
        var currentprogressper = 73 / result.riskList.length;
        var currentProgress = completeCount * currentprogressper
        console.log("curren ", currentProgress);

          var count = 73 / result.totalQuestions;
          // console.log(count);
          // var remaining = result.totalQuestions - result.riskList.length;
          // console.log(remaining);
          var progress = currentProgress + props.now;
          console.log("useffect progress",progress);
          // setTest(true);
          props.changeStepper(progress);
        }
        // var i
        // result.riskList.find((item,index) => {
        //   if(item.id === 216){
        //     i = index;
        //     return i
        //   }
        // })
        console.log("active index => ", ind);
        var activeId;
        result.riskList.find((item,index) => {
          if(item.isCompleted === false){
            
            return activeId = item.id;
          }
         
        });
        console.log(activeId);
        setActiveQuestionId(activeId);
      })
      .catch((error) => {
        setSpinner(false);
        console.log(error)
        // alert(error);
      });
  }

  async function selectAnswer(index, resp) {
    await setActiveIndex(index);
    setActiveAnswer(resp);
    const key = questions[activeQuestionIndex];
    const valu = key[resp];
    console.log("selected string ",resp);
    console.log("answer ", valu);
    updateQuestion(resp);

    // console.log(index);
    // submitAnswer();
  }

  async function submitAnswer() {
    // const token = sessionStorage.getItem("token");
    // const index = (activeIndex + 1).toString();
    // const answer = questions[0].resp + index;
    // console.log("submit answer", answer);
    // fetch(endPoints,{
    //   method: "POST",
    //   headers:{
    //     "Content-Type": "application/json",
    //     Authorization : `Bearer ${token}`
    //   },
    //   body: JSON.stringify({
    //       riskId: activeQuestionId,

    //   })
    // })
  }

  async function updateQuestion(resp) {
    // debugger;
    // console.log(token);
    console.log("response ",resp);
    var decoded = jwt_decode(userToken);
    setSpinner(true);
    // console.log(decoded);
    // console.log(props.data.diagnosticId);
    // console.log(decoded.Id);
    // console.log(token);
    const diagnosticsId = props.data.diagnosticId;
    const id = decoded.Id;

    console.log(id);
    console.log("userid", id);
    console.log("successful");
   
    if (props.now === 7) {
      await fetch(endPoints.CREATE_DIAGNOSTIC, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          diagnosticId: diagnosticsId,
          userId: parseInt(id),
          isDiagnosticComplete: false,
        }),
      })
        // .then((result) => {
        //   result.json()
        //   console.log(result);
        // })
        
        .then(async (response) => {
          if (response.status === 200 && questions.length >= 1) {
            let data = await response.json();
            console.log("new ",data.id);
            console.log("hello")
            console.log("active index ",activeQuestionIndex)
            const key = questions[activeQuestionIndex];
            const valu = key[resp];
            console.log("riskid", activeQuestionId);
            console.log("score", valu);
            console.log(diagnosticsId);
            console.log(userToken);
            console.log("return ",response);
            console.log("again id", data.id);
             fetch(endPoints.SUBMIT_ANSWER, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken}`,
              },
              body: JSON.stringify({
                riskId: activeQuestionId,
                score: valu,
                selectedResponse: resp,
                userDiagnosticEvaluationId: data.id,
                userInfoId: parseInt(id),
                diagnosticId: diagnosticsId,
              }),
            })
              .then((res) => {
                if (res.status === 200) {
                  props.changeStepper(props.now + progressPerQuestion);
                  setActiveIndex("");
                  setDiagEvalId(data.id);
                  setActiveQuestionIndex(activeQuestionIndex + 1);
                  setActiveQuestionId(questions[activeQuestionIndex + 1].id);

                  // setActiveQuestion(activeQuestion + 1);
                  setSpinner(false);
                } else {
                  setSpinner(false);
                  console.log(res)
                  console.log("answer not submitted");
                }
              })
              .catch((error) => {
                setSpinner(false);
                console.log("answer");
                // alert(error)
              });
          } else {
            setSpinner(false);
            console.log("Something went wrong", response);
            // alert("wrong......");
          }
        })
        .catch((error) => {
          setSpinner(false);
          console.log("catch error", error);
          // alert(error)
        });
    } else {
      if (questions.length >= 1) {
        const key = questions[activeQuestionIndex];
        console.log("key  => ",key);
        console.log("second response ", resp);
        const valu = key[resp];
        console.log("score", valu);
        console.log("active quesion id " ,activeQuestionId);
        // console.log(valu);
        console.log("diagnostic id ",diagnosticsId);

        fetch(endPoints.SUBMIT_ANSWER, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify({
            riskId: activeQuestionId,
            score: valu,
            selectedResponse: resp,
            userInfoId: parseInt(id),
            diagnosticId: diagnosticsId,
          }),
        })
          .then( async (res) => {
            if (res.status === 200 && questions) {
              let answer = await res.json();
              props.changeStepper(props.now + progressPerQuestion);
              setActiveIndex("");
              // questions.shift();
              // setTotalQuestions(totalQuestions + 1);
              setActiveQuestionIndex(activeQuestionIndex + 1);
              const currentId = questions[activeQuestionIndex + 1].id;
              console.log("currentid ", currentId);
                  // agaain back api
                  // debugger;
                  fetch(`${endPoints.GET_PREVIOUS_ANSWER}/${currentId},${diagEvalId}`,{
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${userToken}`
                    }
                  }).then((response) => response.json())
                    .then((res) => {
                      // debugger;
                      console.log("selected response ",res.selectedResponse);
                      console.log(boxes[0].resp);
                      // setIsBack(true);
              
                      // set Id
                  //     setActiveQuestionId(questions[activeQuestionIndex - 1]?.id);
                  // setActiveQuestionIndex(activeQuestionIndex - 1);
              
                  // set Progress
                  // var currentprogressper = 73 / questions.length;
                  // var remainProgress = props.now - currentprogressper;
                  // props.changeStepper(remainProgress);
              
                      // console.log(boxes.indexOf(x => x.resp === res.selectedResponse))
                      const activeInd = boxes.map(function(e) { return e.resp; }).indexOf(res.selectedResponse);
                      setActiveIndex(activeInd);
                      console.log(boxes.map(function(e) { return e.resp; }).indexOf(res.selectedResponse))
                      // boxes.map(function(e) { return e.hello; }).indexOf(res.selectedResponse);
                      const prevIndex = boxes.indexOf(x => x.resp === res.selectedResponse);
                      console.log("answer index ",prevIndex);
                    })
                    .catch((error) =>  {
                      // debugger;
                      console.log(error)
                    })
              var qid;
              const activeIndex = activeQuestionIndex + 1;
              questions.find((item, i) => {
                if(i = activeIndex){
                  qid = item.id
                }
              });
              setDiagEvalId(answer.id);
              console.log("diagnostics  => ",answer);
              questions ? setActiveQuestionId(questions[activeQuestionIndex + 1]?.id) : setActiveQuestionId("");
              console.log("remianing question => ", questions);
              // console.log("first question index => ", questions[0].id);
              console.log(props.now);
              setSpinner(false);
              // setActiveQuestion(activeQuestion + 1);
            } else {
              // console.log(res.json());
              setSpinner(false);
              // console.log("answer not submitted without first request");
            }
          })
          .catch((error) => {
            
            setSpinner(false);
            // alert(error)
            // console.log(error);
          });
      } else {
        setSpinner(false);
        props.changeStepper(80);
      }
    }

    // setActiveIndex("");
    // setActiveQuestion(activeQuestion+1);
    // props.changeStepper(props.now + progressPerQuestion);
    // console.log(activeProgress);
    // if(activeQuestion === questions.length){
    //   this.props.changeStepper("80");
    //   console.log("done");
    // }
  }
  // console.log("submit answer", activeIndex);
  // console.log("active question id ==> ", activeQuestionId);

  // console.log("errorrrr", questions);

  const goBack = () => {
    console.log(activeQuestionIndex);
    
    const prevQuestionId = parseInt(questions[activeQuestionIndex - 1]?.id);
    console.log("prev id", prevQuestionId);

    

    fetch(`${endPoints.GET_PREVIOUS_ANSWER}/${prevQuestionId},${diagEvalId}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`
      }
    }).then((response) => response.json())
      .then((res) => {
        console.log("selected response ",res.selectedResponse);
        console.log(boxes[0].resp);
        setIsBack(true);

        // set Id
        setActiveQuestionId(questions[activeQuestionIndex - 1]?.id);
    setActiveQuestionIndex(activeQuestionIndex - 1);

    // set Progress
    var currentprogressper = 73 / questions.length;
    var remainProgress = props.now - currentprogressper;
    props.changeStepper(remainProgress);

        // console.log(boxes.indexOf(x => x.resp === res.selectedResponse))
        const activeInd = boxes.map(function(e) { return e.resp; }).indexOf(res.selectedResponse);
        setActiveIndex(activeInd);
        console.log(boxes.map(function(e) { return e.resp; }).indexOf(res.selectedResponse))
        // boxes.map(function(e) { return e.hello; }).indexOf(res.selectedResponse);
        const prevIndex = boxes.indexOf(x => x.resp === res.selectedResponse);
        console.log("answer index ",prevIndex);
      })
      .catch((error) =>  console.log(error))

  }

  useEffect(() => {
    // setActiveQuestion(0);
    getAllQuestions();
    // console.log("active", questions[0]);
    // console.log(props.data);
   
  }, [test]);
  // console.log("progress now => ", props.now);
  // console.log(activeQuestionId);
  // console.log("diagnostic eval id ", diagEvalId);

  console.log("activate ", activeQuestionIndex);
  return (
    <div className="steps-three-content">
      <div
        className=" step-three-content-container"
      >
        
        <div class="step-three-card-wrapper">
          <Card
            style={{
              backgroundColor: "#fff",
              padding: "7rem 5rem",
              borderRadius: "3.5rem",
              position : "relative"
            }}
          >
            {spinner && (
          <div className="spinner">
            <CircularProgress className="circular-spinner-blue" />
          </div>
        )}
            <div className="text-center">
              <h3>{questions[`${activeQuestionIndex}`]?.wroding}</h3>
              <p>
                Vos réponses peuvent varier de « 0 » voulant dire « Oui ! je
                suis absolument d’accord » à 7 voulant « Non ! je ne suis
                absolument pas d’accord ».
              </p>
              {boxes.map((box,index) => {
                return (
                  <span
                    style={
                      index === activeIndex
                        ? { color: "#fff", backgroundColor: "#EFD242" }
                        : { color: "#000" }
                    }
                    className="steps-three-box"
                    onClick={() => selectAnswer(index, box.resp)}
                    key={index}
                  >
                    {box.answer}
                  </span>
                );
              })}
            </div>
            <div className="text-center pt-5">
              <Button
                secondary
                disabled={activeQuestionIndex === 0 ? true :  false}
                onClick={goBack}
              >
                Back
              </Button>
             
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
