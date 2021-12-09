import React from "react";
import EvaluationTestQue from "../../components/evaluation-test-quesion/EvaluationTestQue";
import { evaluationQuestions } from "../../data/data";
import "./evaluation-test-question.style.scss";
const EvaluationTestQuestion = () => {
  return (
    <div className="evaluation-que">
      <h2>Evaluation Test</h2>
      <p className="sub-title">
        Answer the following questions on a scale of “Strongly Disagree” to
        “Strongly Agree”
      </p>
      {evaluationQuestions.map((item) => {
        return <EvaluationTestQue iEvaluationQuestion={item} />;
      })}
      <button className="btn submit-btn">Submit</button>
    </div>
  );
};

export default EvaluationTestQuestion;
