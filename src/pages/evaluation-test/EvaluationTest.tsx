import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

import "./evaluation-test.scss";
const EvaluationTest = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [evaluationLink, setEvaluationLink] = useState(
    "https://evaluationtest-session234-live"
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [copied, setCopied] = useState(false);
  return (
    <div className="evaluation-test">
      <h2>Evaluation Test</h2>
      <div className="d-flex justify-content-end align-items-center">
        <button className="btn view-report-btn">View Report</button>
      </div>
      <div className="inner-container">
        <div className="d-flex justify-content-between align-items-center link-container">
          <p>{evaluationLink}</p>
          <CopyToClipboard text={evaluationLink} onCopy={() => setCopied(true)}>
            <button className="btn copy-link-btn">Copy Link</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default EvaluationTest;
