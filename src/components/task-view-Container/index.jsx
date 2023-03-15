import React from "react";
import ListView from "./listView/listView";
import TableView from "./tableView/tableView";

const TaskViewContainer = (props) => {
  const {tasks, view, selectTask, deleteTask, changeStatus} = props

  return (
    <>
      {
        view === 'list' ? <ListView tasks={tasks} selectTask={selectTask} deleteTask={deleteTask} changeStatus={changeStatus} /> : <TableView tasks={tasks} selectTask={selectTask} deleteTask={deleteTask} changeStatus={changeStatus} />
      }
      
    </>
  );
};

export default TaskViewContainer;
