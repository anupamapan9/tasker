import React, { useState } from "react";
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
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {/* <!-- Search Box --> */}
        <SearchTasks />
        {/* <!-- Search Box Ends --> */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction />
          <TaskLists tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
