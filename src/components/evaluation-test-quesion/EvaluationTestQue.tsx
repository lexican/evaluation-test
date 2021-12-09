import React, { FC } from "react";
import { IEvaluationQuestion } from "../../data/data";
import "./evaluation-test-que.scss";

interface IProps {
  iEvaluationQuestion: IEvaluationQuestion;
}

const EvaluationTestQue: FC<IProps> = ({iEvaluationQuestion}) => {
  return (
    <div className="question">
      <p>{iEvaluationQuestion.question}</p>
      <div className="d-flex">
        <div className="form-check d-flex flex-column justify-content-cente align-items-center">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="Strongly Disagree"
          />
          <label className="form-check-label">Strongly Disagree</label>
        </div>
        <div className="form-check d-flex flex-column justify-content-cente align-items-center">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="Disagree"
          />
          <label className="form-check-label">Disagree</label>
        </div>
        <div className="form-check d-flex flex-column justify-content-cente align-items-center">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="Fair"
          />
          <label className="form-check-label">Fair</label>
        </div>
        <div className="form-check d-flex flex-column justify-content-cente align-items-center">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="Agree"
          />
          <label className="form-check-label">Agree</label>
        </div>
        <div className="form-check d-flex flex-column justify-content-cente align-items-center">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="Strongly Agree"
          />
          <label className="form-check-label">Strongly Agree</label>
        </div>
      </div>
    </div>
  );
};

export default EvaluationTestQue;
