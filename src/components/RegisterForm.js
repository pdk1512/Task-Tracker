import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { FormFeedback } from 'reactstrap';
import * as Yup from "yup";
import { registerUserRequest } from "../store/authentication/register/Action";


function RegisterForm() {
  const registerState = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username required!"),
    password: Yup.string().required("Password required!"),
    confirmPassword: Yup.string()
      .required("Confirm Password required!")
      .oneOf(
        [Yup.ref("password"), null],
        "Confirm Password must match to password"
      ),
  });

  const onSubmit = (values) => {
    dispatch(registerUserRequest(values.username, values.password, history));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label>Username:</label>
          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" component={FormFeedback} className="error" />
          {/* Show error register */}
          {registerState.error !== "" ? (
            <div style={{ color: "red" }}>{registerState.error}</div>
          ) : (
            <></>
          )}
        </div>

        <div className="form-control ">
          <label>Password</label>
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component={FormFeedback} className="error" />
        </div>

        <div className="form-control ">
          <label>Confirm Password</label>
          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <ErrorMessage
            name="confirmPassword"
            component={FormFeedback}
            className="error"
          />
        </div>

        <input type="submit" value="Sign up" className="btn btn-block" />
        <Link to='/'><IoMdArrowRoundBack/>Back to login</Link>
      </Form>
    </Formik>
  );
}

export default RegisterForm;
