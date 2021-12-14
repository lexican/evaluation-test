import React, { FC } from "react";
import { IQuestion } from "../../pages/evaluation-test-question/EvaluationTestQuestion";
import "./evaluation-test-que.scss";

interface IProps {
  iQuestion: IQuestion;
  onSelect: Function;
}

const EvaluationTestQue: FC<IProps> = ({ iQuestion, onSelect }) => {
  const onSelectAnswer = (e: { currentTarget: { value: any; }; }) => {
    const answer = e.currentTarget.value;
    onSelect(iQuestion, parseFloat(answer))
  }
  return (
    <div className="question">
      <p>{iQuestion.question}</p>
      <div className="d-flex">
        <div className="form-check d-flex flex-column justify-content-cente align-items-center">
          <input
            className="form-check-input"
            type="radio"
            name={iQuestion.id.toString()}
            id="exampleRadios1"
            value={0.2}
            onChange={onSelectAnswer}
          />
          <label className="form-check-label">Strongly Disagree</label>
        </div>
        <div className="form-check d-flex flex-column justify-content-cente align-items-center">
          <input
            className="form-check-input"
            type="radio"
            name={iQuestion.id.toString()}
            id="exampleRadios1"
            value={0.4}
            onChange={onSelectAnswer}
          />
          <label className="form-check-label">Disagree</label>
        </div>
        <div className="form-check d-flex flex-column justify-content-cente align-items-center">
          <input
            className="form-check-input"
            type="radio"
            name={iQuestion.id.toString()}
            id="exampleRadios1"
            value={0.6}
            onChange={onSelectAnswer}
          />
          <label className="form-check-label">Fair</label>
        </div>
        <div className="form-check d-flex flex-column justify-content-cente align-items-center">
          <input
            className="form-check-input"
            type="radio"
            name={iQuestion.id.toString()}
            id="exampleRadios1"
            value={0.8}
            onChange={onSelectAnswer}
          />
          <label className="form-check-label">Agree</label>
        </div>
        <div className="form-check d-flex flex-column justify-content-cente align-items-center">
          <input
            className="form-check-input"
            type="radio"
            name={iQuestion.id.toString()}
            id="exampleRadios1"
            value={1}
            onChange={onSelectAnswer}
          />
          <label className="form-check-label">Strongly Agree</label>
        </div>
      </div>
    </div>
  );
};

export default EvaluationTestQue;
