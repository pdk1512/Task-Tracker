import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import About from "./components/About";
// import AddTask from "./components/AddTask";
import FormikTaskForm from "./components/FormikTaskForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import LoginForm from "./components/LoginForm";
import taskApi from "./api/TaskApi";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const account = useSelector((state) => state.user);

  useEffect(() => {
    const getTask = async () => {
      if (account.user) {
        const tasksFromServer = await taskApi.getAll();
        const taskByUser = tasksFromServer.filter(
          (task) => task.userid === account.user.id
        );
        setTasks(taskByUser);
      }
    };

    getTask();
  }, [account]);

  //Add Tasks
  const addTask = async (task) => {
    const response = await taskApi.post(task);

    setTasks([...tasks, response]);
    setShowAddTask(!showAddTask);
  };

  //Delete Tasks
  const deleteTask = async (id) => {
    await taskApi.del(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const tastToToggle = await taskApi.getById(id);
    const updateTask = { ...tastToToggle, reminder: !tastToToggle.reminder };

    await taskApi.put(id, updateTask);

    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Edit Task
  const editTask = async (value, id) => {
    const taskToEdit = await taskApi.getById(id);
    const updateTask = {
      ...taskToEdit,
      text: value.text,
      time: value.time,
      reminder: value.reminder,
    };

    await taskApi.put(id, updateTask);

    setShowAddTask(!showAddTask);
    setTasks(
      tasks.map((task) =>
        task.id == id
          ? {
              ...task,
              text: value.text,
              time: value.time,
              reminder: value.reminder,
            }
          : task
      )
    );
  };

  const getEditTask = (taskId) => tasks.find((task) => task.id == taskId);

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAddBtn={showAddTask}
        />

        {/* <Route path='/' exact render={(props) => (
              <>
                {showAddTask && <AddTask onAdd={addTask}/>}
                {tasks.length > 0 ? 
                  <Tasks 
                    tasks={tasks} 
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  /> 
                  : "You don't have any tasks yet"}
              </>
            )}/> */}

        <Route exact path="/">
          <LoginForm />
        </Route>

        <Route path="/tasks">
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder}
              onAdd={() => setShowAddTask(!showAddTask)}
            />
          ) : (
            "You don't have any tasks yet"
          )}
        </Route>

        <Route path="/add">
          {/* <AddTask onAdd={addTask}/> */}
          <FormikTaskForm onAdd={addTask} />
        </Route>

        <Route path="/edit/:taskId">
          <FormikTaskForm
            onEdit={editTask}
            getEditTask={getEditTask}
          />
        </Route>

        <Route path="/register">
          <RegisterForm />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Footer onClick={() => setShowAddTask(false)} />
      </div>
    </Router>
  );
}

export default App;
