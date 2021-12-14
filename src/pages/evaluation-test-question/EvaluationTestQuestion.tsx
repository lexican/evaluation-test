import axios from "axios";
import React, { useEffect, useState } from "react";
import EvaluationTestQue from "../../components/evaluation-test-quesion/EvaluationTestQue";
import "./evaluation-test-question.style.scss";

export type IQuestion = {
  id: number;
  question: string;
  question_number: number;
  question_type: string;
  survey: number;
  user: number;
};

export type IAnswer = {
  question: number;
  answer: number;
};

const answer: IAnswer[] = [
  { question: 1, answer: -1 },
  { question: 2, answer: -1 },
  { question: 3, answer: -1 },
  { question: 4, answer: -1 },
  { question: 5, answer: -1 },
  { question: 6, answer: -1 },
  { question: 7, answer: -1 },
  { question: 8, answer: -1 },
  { question: 9, answer: -1 },
  { question: 10, answer: -1 },
];

const EvaluationTestQuestion = () => {
  const [evaluationQuestions, setEvaluationQuestions] = useState<IQuestion[]>(
    []
  );
  const [evaluationAnswer, setEvaluationAnswer] = useState<IAnswer[]>([
    ...answer,
  ]);
  useEffect(() => {
    getSurveyQuestion();
  }, []);

  const getSurveyQuestion = () => {
    axios
      .get("/surveys/questions/?survey_id=1")
      .then((response) => {
        setEvaluationQuestions(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  const onSelect = (iQuestion: IQuestion, answer: number) => {
    const tempAns = [...evaluationAnswer];
    tempAns[iQuestion.question_number - 1].answer = answer;
    setEvaluationAnswer([...tempAns]);
  };

  const submitAnswer = () => {
    if (evaluationAnswer.filter((e) => e.answer === -1).length > 0) {
      alert("Fill out all questions");
    } else {
      console.log(evaluationAnswer);
      axios
        .post("surveys/evaluation/?survey_id=1", {
          'data': evaluationAnswer,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    }
  };

  return (
    <div className="evaluation-que">
      <h2>Evaluation Test</h2>
      <p className="sub-title">
        Answer the following questions on a scale of “Strongly Disagree” to
        “Strongly Agree”
      </p>
      {evaluationQuestions.map((item) => {
        return (
          <EvaluationTestQue
            iQuestion={item}
            onSelect={onSelect}
            key={item.id}
          />
        );
      })}
      <button className="btn submit-btn" onClick={submitAnswer}>
        Submit
      </button>
    </div>
  );
};

export default EvaluationTestQuestion;
