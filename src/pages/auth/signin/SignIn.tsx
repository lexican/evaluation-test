import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../login/login.scss";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default function SignUp() {
  const [error, setError] = useState<string>("");
  return (
    <div className="login">
      <div className="container">
        <div className="background-image"></div>
        <div className="form-container">
          <div className="form">
            <h2>Sign up</h2>
            <Formik
              enableReinitialize={true}
              initialValues={{
                email: "",
                password: "",
                confirm_password: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                setError("");
                axios
                  .post("/users/", {
                    email: values.email,
                    password: values.password,
                    confirm_password: values.confirm_password,
                  })
                  .then((response) => {
                    const { token } = response.data;
                    console.log(token);
                    //localStorage.setItem('token', token);
                    setSubmitting(false);
                    //resetForm();
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
                    setSubmitting(false);
                    setError("user with this E-mail Address already exists.");
                  });
              }}
            >
              {({ isSubmitting, errors }) => (
                <Form>
                  {error && <div className="form-error">{error}</div>}
                  <div className="col mb-3">
                    <label className="form-label">Email ID</label>
                    <Field
                      type="text"
                      className="form-control"
                      placeholder=""
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="form-error"
                    />
                  </div>
                  <div className="col mb-4">
                    <label className="form-label">Enter Password</label>
                    <Field
                      type="password"
                      className="form-control"
                      placeholder=""
                      name="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="form-error"
                    />
                  </div>
                  <div className="col mb-4">
                    <label className="form-label">Confirm Password</label>
                    <Field
                      type="password"
                      className="form-control"
                      placeholder=""
                      name="confirm_password"
                    />
                    <ErrorMessage
                      name="confirm_password"
                      component="div"
                      className="form-error"
                    />
                  </div>
                  <div className="row">
                    <div className="col-mb-2">
                      <button
                        type="submit"
                        className="btn"
                        disabled={isSubmitting}
                      >
                        Sign up
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
