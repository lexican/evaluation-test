import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./evaluation-report.scss";

export type IReport = {
  accessibility: number;
  navigation: number;
  attractiveness: number;
  understanability: number;
};

export type IReportLevel = {
  accessibility: string;
  navigation: string;
  attractiveness: string;
  understanability: string;
};

export default function EvaluationReport() {
  const [evaluationReport, setEvaluationReport] = useState<IReport>({
    accessibility: 0,
    attractiveness: 0,
    navigation: 0,
    understanability: 0,
  });

  useEffect(() => {
    getSurveyReport();
  }, []);

  let { id } = useParams();

  const getSurveyReport = () => {
    axios
      .get("/surveys/evaluation/report/?survey_id=" + id, {
        headers: {
          Authorization: "Token 08eeb03f8dc574e9957deddbdba80cbd3b56fbb7",
        },
      })
      .then((response) => {
        console.log("Response.data: " + JSON.stringify(response.data));

        const { accessibility, navigation, attractiveness, understanability } =
          response.data;

        setEvaluationReport({
          accessibility: accessibility.toFixed(2),
          attractiveness: attractiveness.toFixed(2),
          navigation: navigation.toFixed(2),
          understanability: understanability.toFixed(2),
        });
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

  const getBadge = (value: number) => {
    console.log(value);
    if (value >= 0 && value <= 0.2) {
      return "Bad";
    } else if (value > 0.2 && value <= 0.4) {
      return "Poor";
    } else if (value > 0.4 && value <= 0.6) {
      return "Moderate";
    } else if (value > 0.6 && value <= 0.8) {
      return "Good";
    } else if (value > 0.8 && value <= 1) {
      return "Excellent";
    }
    return "";
  };

  return (
    <div className="evaluation-report">
      <h2 className="my-2">Evaluation Test</h2>
      <p className="sub-title">Number of Participants</p>
      <div className="d-flex justify-content-between align-items-center report-container">
        <div className="fs-24 title">Accessibility</div>
        <div className="text-center">
          <div className="fs-18">Usability Point</div>
          <div className="fs-24">{evaluationReport.understanability}</div>
        </div>
        <div className="text-center">
          <div className="fs-18">Usability Level</div>
          <div className="fs-24">
            {getBadge(evaluationReport.understanability)}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center report-container">
        <div className="fs-24 title">Navigation</div>
        <div className="text-center">
          <div className="fs-18">Usability Point</div>
          <div className="fs-24">{evaluationReport.navigation}</div>
        </div>
        <div className="text-center">
          <div className="fs-18">Usability Level</div>
          <div className="fs-24">{getBadge(evaluationReport.navigation)}</div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center report-container">
        <div className="fs-24 title">Attrativeness</div>
        <div className="text-center">
          <div className="fs-18">Usability Point</div>
          <div className="fs-24">{evaluationReport.attractiveness}</div>
        </div>
        <div className="text-center">
          <div className="fs-18">Usability Level</div>
          <div className="fs-24">
            {getBadge(evaluationReport.attractiveness)}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center report-container">
        <div className="fs-24 title">Understandability</div>
        <div className="text-center">
          <div className="fs-18">Usability Point</div>
          <div className="fs-24">{evaluationReport.understanability}</div>
        </div>
        <div className="text-center">
          <div className="fs-18">Usability Level</div>
          <div className="fs-24">
            {getBadge(evaluationReport.understanability)}
          </div>
        </div>
      </div>
    </div>
  );
}
