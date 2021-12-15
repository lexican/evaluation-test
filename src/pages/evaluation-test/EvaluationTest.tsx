import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useParams } from "react-router-dom";

import "./evaluation-test.scss";
const EvaluationTest = () => {
  let { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [evaluationLink, setEvaluationLink] = useState(
    "http://localhost:3000/evaluation-test-question/" + id
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <div className="evaluation-test">
      <h2>Evaluation Test</h2>
      <div className="d-flex justify-content-end align-items-center">
        <button className="btn view-report-btn">View Report</button>
      </div>
      <div className="inner-container">
        <div className="d-flex justify-content-between align-items-center link-container">
          <p>{evaluationLink}</p>
          <CopyToClipboard text={evaluationLink} onCopy={() => {
            alert("Survey Link copied");
          }}>
            <button className="btn copy-link-btn">Copy Link</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default EvaluationTest;
