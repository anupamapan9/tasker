import React from "react";
import SearchTasks from "./SearchTasks";
import TaskAction from "./TaskAction";
import TaskLists from "./TaskLists";

export default function TaskBoard() {
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {/* <!-- Search Box --> */}
        <SearchTasks />
        {/* <!-- Search Box Ends --> */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction />
          <TaskLists />
        </div>
      </div>
    </section>
  );
}
