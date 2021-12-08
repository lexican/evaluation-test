import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.scss";

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export default function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="background-image"></div>
        <div className="form-container">
          <div className="form">
            <h2>Login</h2>
            <Formik
              enableReinitialize={true}
              initialValues={{
                username: "",
                password: "",
              }}
              validationSchema={loginSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                // setSubmitting(true);
              }}
            >
              {({ isSubmitting, errors }) => (
                <Form>
                  <div className="col mb-3">
                    <label className="form-label">Email ID</label>
                    <Field
                      type="text"
                      className="form-control"
                      placeholder=""
                      name="username"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="form-error"
                    />
                  </div>
                  <div className="col mb-4">
                    <label className="form-label">Your Password</label>
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
                  <div className="row">
                    <div className="col-mb-2">
                      <button
                        type="submit"
                        className="btn"
                        //disabled={isSubmitting}
                      >
                        LOG IN
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
