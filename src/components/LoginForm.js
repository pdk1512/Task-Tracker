import React, { useEffect } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { loginUserRequest } from "../store";
import { FormFeedback } from "reactstrap";

function LoginForm() {
  const account = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (account.user) {
      history.push("/tasks");
    }
  });

  const initialValues = {
    username: "",
    password: "",
    showpassword: false,
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username required!"),
    password: Yup.string().required("Password required!"),
  });

  const onSubmit = (values) => {
    dispatch(loginUserRequest(values.username, values.password));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({values}) => (
        <Form>
        <div className="form-control">
          <label>Username:</label>
          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" component={FormFeedback} className="error" />
        </div>

        <div className="form-control ">
          <label>Password</label>
          <Field type={ values.showpassword ? "text" : "password" } name="password" placeholder="Password" />
          <ErrorMessage name="password" component={FormFeedback} className="error" />
          <div className="form-control-check">
            <Field type="checkbox" name="showpassword" />
            <label>Show password</label>
          </div>
        </div>

        {/* Show error login */}
        {account.error !== "" ? (
          <div style={{ color: "red" }}>{account.error}</div>
        ) : (
          <></>
        )}

        <input type="submit" value="Login" className="btn btn-block" />
        <p style={{textAlign: "center"}}>Don't have an account? <Link to="/register">Register here</Link></p>
        
      </Form>
      )}
      
    </Formik>
  );
}

export default LoginForm;
