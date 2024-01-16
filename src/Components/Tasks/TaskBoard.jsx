import React, { useState } from "react";
import AddTask from "./AddTask";
import SearchTasks from "./SearchTasks";
import TaskAction from "./TaskAction";
import TaskLists from "./TaskLists";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "I love Learning React",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste voluptates tempore sed doloremque natus error, fuga vel assumenda alias quas!",
    tags: ["Web", "Go", "Js"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [isOpen, setIsOpen] = useState(false);
  const [forUpdateTask, setForUpdateTask] = useState(null);
  function handelAddTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    console.log(tasks);
    setIsOpen(false);
  }
  function taskToUpdate(task) {
    setForUpdateTask(task);
    setIsOpen(true);
  }
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {/* <!-- Search Box --> */}
        <SearchTasks />
        {/* <!-- Search Box Ends --> */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {isOpen && (
            <AddTask onSave={handelAddTask} forUpdateTask={forUpdateTask} />
          )}
          <TaskAction setIsOpen={setIsOpen} />
          <TaskLists tasks={tasks} taskToUpdate={taskToUpdate} />
        </div>
      </div>
    </section>
  );
}
