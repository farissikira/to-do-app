import Header from "./components/Header"
import ToDo from "./components/ToDo";
import DuplicatePopUp from "./components/DuplicatePopUp";
import { useState } from "react";


export default function App() {



  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([])

  const [showDuplicate, setShowDuplicate] = useState(false)




  function addTask() {
    if (task.trim() === "") {
      return;
    }
    const checkDuplicate = tasks.some(t => t.text === task)

    if (checkDuplicate) {
      setShowDuplicate(true);
      return;

    }

    setTasks([...tasks, { text: task, completed: false, edited: false }])
    setTask("")



  }

  function handleEdit(index) {
    const editedTask = [...tasks];
    editedTask[index].edited = true;
    setTasks(editedTask);
  }

  function handleSave(index, newTask) {
    const savedTask = [...tasks];
    savedTask[index].text = newTask;
    savedTask[index].edited = false;
    setTasks(savedTask);
  }

  function deleteTask(task) {
    setTasks(tasks.filter(t => t.text != task))
  }


  function handleCheckButton(clickedTask) {

    setTasks(tasks.map(t => {
      if (t.text === clickedTask) {
        return { ...t, completed: !t.completed };
      }
      return t;
    }));

  }


  return (

    <div className="min-h-screen flex flex-col items-center 
bg-linear-to-br from-blue-900 via-slate-900 to-indigo-950">


      <Header />


      <ToDo task={task}
        setTask={setTask}
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        setTasks={setTasks}
        handleCheckButton={handleCheckButton}
        handleEdit={handleEdit}
        handleSave={handleSave}
        showDuplicate={showDuplicate}
        setShowDuplicate={setShowDuplicate} />
      {showDuplicate && <DuplicatePopUp onClose={() => setShowDuplicate(false)} />}

    </div>
  );

}