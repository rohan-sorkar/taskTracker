import React from "react";

const TableItem = (props) => {
  const { task, selectTask, deleteTask, changeStatus } = props;

  return (
    <tr className="border-b border-gray-500 hover:bg-gray-800 text-gray-400">
      <td className="py-3 px-2 sm:px-6 text-left">
        <input
          className={`${task.isComplete ? 'accent-green-400 ring-green-500' : 'accent-yellow-400 ring-yellow-500'}  ring-2 h-2 sm:h-4 w-2 sm:w-4`}
          type="checkbox"
          defaultChecked={task.isSelect}
          onChange={() => selectTask(task.id)}
        />
      </td>
      <td className="py-3 px-2 sm:px-6 text-left">
        <p>{task.title.slice(0, 25)}...</p>
      </td>
      <td className="py-3 text-center">
        <p>{task.date.toLocaleString("en-US", { weekday: "long" })} , {task.date.toLocaleDateString()}</p>
      </td>
      <td className="py-3 px-2 sm:px-6 text-right">
        <button onClick={() => changeStatus(task.id)} className={`${task.isComplete ? 'bg-green-500' : 'bg-yellow-400'} text-gray-800 text-xs sm:text-base px-2 sm:px-3 py-1 rounded-xl`}>
        {task.isComplete ? 'Completed' : 'Running'}
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
