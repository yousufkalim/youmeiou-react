import React, { useState, useEffect } from "react";
import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";
import "./StepThree.css";
import endPoints from "../../../globals/Constants";
import jwt_decode from "jwt-decode";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useSelector} from "react-redux";
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
  const [questions, setQuestions] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [activeQuestionId, setActiveQuestionId] = useState(null);
  const [activeAnswer, setActiveAnswer] = useState("");
  const [spinner, setSpinner] = useState(true);
  const [totalCount, setTotalCount] = useState(null);

  const userToken = useSelector((state) => state.user.token);

  // var activeProgress = props.now;
  var progressPerQuestion = 73 / totalQuestions;
  // console.log("divide", progressPerQuestion);
  // console.log("total", totalQuestions);

  useEffect(() => {
    setActiveQuestion(0);
    // console.log("active", questions[0]);
    // console.log(props.data);
    getAllQuestions();
   
  }, []);

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
        console.log(result);
        setQuestions(result.riskList);
        setTotalCount(result.totalQuestions);
        setTotalQuestions(result.totalQuestions);
        
        setSpinner(false);
        if(result.riskList.length === 0){
            props.changeStepper(80);
            console.log("error");
        }
        else if(result.totalQuestions > result.riskList.length){
          var count = 73 / result.totalQuestions;
          console.log(count);
          var remaining = result.totalQuestions - result.riskList.length;
          console.log(remaining);
          var progress = (remaining * count) + props.now;
          console.log("useffect progress",progress);
          props.changeStepper(progress);
        }
        setActiveQuestionId(result.riskList[0].id);
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

    // console.log(index);
    submitAnswer();
  }

  async function submitAnswer() {
    const token = sessionStorage.getItem("token");
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

  async function updateQuestion() {

    // console.log(token);
    var decoded = jwt_decode(userToken);
    setSpinner(true);
    // console.log(decoded);
    // console.log(props.data.diagnosticId);
    // console.log(decoded.Id);
    // console.log(token);
    const diagnosticsId = props.data.diagnosticId;
    const id = decoded.Id;

    console.log(id);
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
        .then((res) => {
          if (res.status === 200 && questions.length >= 1) {
            console.log("successful");
            const key = questions[0];
            const valu = key[activeAnswer];
            console.log("riskid", activeQuestionId);
            console.log("score", valu);
            console.log("userid", id);
            console.log(diagnosticsId);

             fetch(endPoints.SUBMIT_ANSWER, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken}`,
              },
              body: JSON.stringify({
                riskId: activeQuestionId,
                score: valu,
                userInfoId: parseInt(id),
                diagnosticId: diagnosticsId,
              }),
            })
              .then((res) => {
                if (res.status === 200) {
                  props.changeStepper(props.now + progressPerQuestion);
                  setActiveIndex("");
                  questions.shift();
                  // setTotalQuestions(totalQuestions + 1);
                  // console.log(activeQuestionId);
                  setActiveQuestionId(questions[0].id);
                  // setActiveQuestion(activeQuestion + 1);
                  setSpinner(false);
                } else {
                  setSpinner(false);
                  console.log("answer not submitted");
                }
              })
              .catch((error) => {
                setSpinner(false);
                console.log("answer");
                alert(error)
              });
          } else {
            setSpinner(false);
            console.log(res);
            alert("Something went wrong");
          }
        })
        .catch((error) => {
          setSpinner(false);
          console.log("catch error", error);
          alert(error)
        });
    } else {
      if (questions.length >= 1) {
        const key = questions[0];
        const valu = key[activeAnswer];
        // console.log(activeQuestionId);

        fetch(endPoints.SUBMIT_ANSWER, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify({
            riskId: activeQuestionId,
            score: valu,
            userInfoId: parseInt(id),
            diagnosticId: diagnosticsId,
          }),
        })
          .then((res) => {
            if (res.status === 200 && questions) {
              props.changeStepper(props.now + progressPerQuestion);
              setActiveIndex("");
              questions.shift();
              // setTotalQuestions(totalQuestions + 1);
              questions ? setActiveQuestionId(questions[0]?.id) : setActiveQuestionId("");
              console.log("remianing question => ", questions);
              // console.log("first question index => ", questions[0].id);
              console.log(props.now);
              setSpinner(false);
              // setActiveQuestion(activeQuestion + 1);
            } else {
              // console.log(res);
              setSpinner(false);
              // console.log("answer not submitted without first request");
            }
          })
          .catch((error) => {
            setSpinner(false);
            // alert("",error)
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
  console.log("progress now => ", props.now);

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
              <h3>{questions[`${activeQuestion}`]?.wroding}</h3>
              <p>
                Vos réponses peuvent varier de « 0 » voulant dire « Oui ! je
                suis absolument d’accord » à 7 voulant « Non ! je ne suis
                absolument pas d’accord ».
              </p>
              {boxes.map((box, index) => {
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
                disabled={activeIndex === "" ? true : false}
                onClick={updateQuestion}
              >
                Suivant
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
