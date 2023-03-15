import React from "react";
import TableItem from "./tableItem";

const TableView = (props) => {
  const { tasks, selectTask, deleteTask, changeStatus } = props;

  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="bg-gray-700 text-gray-200 uppercase text-sm leading-normal">
          <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">#</th>
          <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">Title</th>
          <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">Time</th>
          <th className="py-2 sm:py-3 px-2 sm:px-6 text-center">Status</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {tasks.length > 0 &&
          tasks.map((task) => (
            <TableItem
              key={task.id}
              task={task}
              selectTask={selectTask}
              deleteTask={deleteTask}
              changeStatus={changeStatus}
            />
          ))}
      </tbody>
    </table>
  );
};

export default TableView;
