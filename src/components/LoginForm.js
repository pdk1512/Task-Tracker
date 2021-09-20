import React, {useEffect} from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import {useSelector, useDispatch} from 'react-redux'
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { fetchUsers, loginUserRequest } from "../store";

function LoginForm() {
  const account = useSelector(state => state.user)
  const dispatch = useDispatch()
  const history = useHistory();

  useEffect(() => {
    if(account.user){
      history.push('/tasks')
    }
  })

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username required!"),
    password: Yup.string().required("Password required!"),
  });

  const onSubmit = (values) => {
    dispatch(loginUserRequest(values.username, values.password))
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
          <ErrorMessage name="username" component={"div"} className="error" />
        </div>

        <div className="form-control">
          <label>Password</label>
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component={"div"} className="error" />
        </div>

        {/* Show error login */}
        {account.error != "" ? <div style={{color: 'red'}}>{account.error}</div> : <></>}

        <input type="submit" value="Login" className="btn btn-block" />
      </Form>
    </Formik>
  );
}

export default LoginForm;
