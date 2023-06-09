import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import AddTaskForm from "./addTaskForm";

const AddTaskContainer = ({addTaskHandler}) => {
  const [isOpenForm, setIsOpenForm] = useState(false)
  const openForm = () => {
    setIsOpenForm(true)
  }
  const closeForm = () => {
    setIsOpenForm(false)
  }


  return (
    <>
      <button onClick={openForm} className="border-2 border-gray-800 rounded-full px-10 py-2 text-gray-400 flex items-center gap-2 shadow-sm shadow-gray-600 hover:bg-gray-900 mx-auto">
        <div className="bg-pink-500 text-slate-800 rounded-full px-1 py-1">
          <HiPlus></HiPlus>
        </div>
        Add a task
      </button>
      {
        isOpenForm && <AddTaskForm addTaskHandler={addTaskHandler} closeForm={closeForm} />
      }
    </>
  );
};

export default AddTaskContainer;
