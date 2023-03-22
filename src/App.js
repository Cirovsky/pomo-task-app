import Footer from "./components/Footer";
import Header from "./components/Header";
import Screen from "./components/Screen";
import Form from "./components/Form";

import {BsFillPlusCircleFill} from 'react-icons/bs'

import './App.css';
import { useState } from "react";
import Button from "./components/Button";


class Task {
  constructor(title, priority = 'média', progress = 'a fazer', deadline = '', deadlineHour = '') {
    this.title = title;
    this.priority = priority;
    this.progress = progress;
    this.deadline = deadline;
    this.deadlineHour = deadlineHour;
    this.date = new Date();
  }
  checklist = [];
  addChecklist(task) {
    this.checklist.push(task);
  }
  setDeadline(date) {
    this.date = date;
  }

}

const priorityList = ["alta", "média", "baixa"];
const progressList = ['a fazer', 'fazendo', 'concluído'];

function App() {

  const loadingTasks = localStorage.tasks? JSON.parse(localStorage.tasks) : [];
  const convertTasks = loadingTasks.length > 0? loadingTasks.map(task=>{
    return new Task(task.title, task.priority, task.progress, task.deadline, task.deadlineHour)
  }): [];

  const [tasks, setTasks] = useState(convertTasks);

  const addTask = (title, priority, progress, deadline, deadlineHour) => {
    const newTasks = [...tasks, new Task(title, priority, progress, deadline, deadlineHour)];
    console.log(newTasks)
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="container principal">
      <Header />
      <main className="container main">
        <section className="new-task-form" style={{display: `${openForm? 'block': 'none'}`}}>
          <Form priorityList={priorityList} progressList={progressList} newTask={addTask} />
        </section>
      <section className="container view">

        <Button className={"container container__add-task"} 
        clickEvent={()=> openForm? setOpenForm(false) : setOpenForm(true)}>
          <BsFillPlusCircleFill className="add-task"/>
        </Button>
        <Screen title ={'por realização'} tasklist={[]}/>
      </section>
      
      </main>
      <Footer />
    </div>
  );
}

export default App;
