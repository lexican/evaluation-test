import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./login.scss";
import axios from "axios";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Required"),
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
                email: "",
                password: "",
              }}
              validationSchema={loginSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                axios
                  .post("/users/login/", {
                    email: values.email,
                    password: values.password,
                  })
                  .then((response) => {
                    const {token} = response.data;
                    localStorage.setItem('token', token);
                    setSubmitting(false);
                    resetForm();
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
                  });
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
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
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
                        disabled={isSubmitting}
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
