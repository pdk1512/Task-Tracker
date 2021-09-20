import React, { useState, useEffect } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function FormikTaskForm({ onAdd, onEdit, getEditTask }) {
  const [editValue, setEditValue] = useState(null);
  const account = useSelector((state) => state.user);
  const history = useHistory();
  const { taskId } = useParams();

  const initialValues = {
    userid: account.user.id,
    text: "",
    time: "",
    reminder: false,
  };

  const validationSchema = Yup.object({
    text: Yup.string().required("Please fill your task"),
    time: Yup.string().required("Please set your time"),
  });

  const onSubmit = (values, onSubmitProps) => {
    if (onAdd) {
      onAdd(values);
      history.push("/tasks");
    } else {
      onEdit(values, taskId);
      history.push("/tasks");
    }
  };

  //   useEffect(() => {
  //     const getEditTask = async () => {
  //       const taskFromServer = await fetchTask(taskId);
  //       const { id, ...valueToEdit } = taskFromServer;
  //       setEditValue(valueToEdit);
  //     };

  //     if (!onAdd) {
  //       getEditTask();
  //     }
  //   }, []);

  useEffect(() => {
    if (!onAdd) {
      const taskToEdit = getEditTask(taskId);
      console.log(taskToEdit);
      const { id, ...valueToEdit } = taskToEdit;
      setEditValue(valueToEdit);
    }
  }, []);

  return (
    <Formik
      initialValues={editValue || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <Form>
        <div className="form-control">
          <label>Task</label>
          <Field type="text" name="text" placeholder="Add Task" />
          <ErrorMessage name="text" component={"div"} className="error" />
        </div>
        <div className="form-control">
          <label>Time</label>
          <Field type="text" name="time" placeholder="Set Time" />
          <ErrorMessage name="time" component={"div"} className="error" />
          <div className="form-control-check">
            <Field type="checkbox" name="reminder" />
            <label>Set Reminder</label>
          </div>
        </div>

        <input
          type="submit"
          value={onAdd ? "Add task" : "Save task"}
          className="btn btn-block"
        />
      </Form>
    </Formik>
  );
}

export default FormikTaskForm;
