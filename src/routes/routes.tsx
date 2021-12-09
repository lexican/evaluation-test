import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import SignUp from "../pages/auth/signin/SignIn";
import EvaluationTestQuestion from "../pages/evaluation-test-question/EvaluationTestQuestion";
import EvaluationTest from "../pages/evaluation-test/EvaluationTest";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/evaluation-test" element={<EvaluationTest />} />
        <Route path="/evaluation-test-question" element={<EvaluationTestQuestion />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
