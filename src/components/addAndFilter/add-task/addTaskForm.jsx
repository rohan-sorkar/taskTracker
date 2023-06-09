import React, { useState } from "react";
import {v4 as uuid} from 'uuid'

const initialState = {title: '', description: ''}

const AddTaskForm = ({closeForm, addTaskHandler}) => {
  const [formState, setFormState] = useState({...initialState})

  const inputChangeHandler = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!formState.title || !formState.description) {
      alert('your input field is empty')
      return;
    }
    const task = {
      id: uuid(),
      ...formState,
      isSelect: false,
      isComplete: false,
      date: new Date()
    }

    addTaskHandler(task)
    setFormState({...initialState})
    closeForm()
  }

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-[#121111]">
      <div className="bg-slate-800 p-8 rounded-xl shadow-md shadow-gray-600">
        <h4 className="text-center text-xl text-gray-400 font-medium mb-6">
          Add new Task
        </h4>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            className="outline-none px-6 py-2 rounded-full bg-gray-700 caret-purple-500 text-gray-300 shadow-md shadow-gray-600"
            type="text"
            placeholder="Write a title..."
            name="title"
            onChange={inputChangeHandler}
            value={formState.title}
          />
          {/* <p className="mt-2 ml-2 text-red-400 italic">
            your input field is empty
          </p> */}
          <textarea
            className="outline-none px-6 py-2 rounded-lg bg-gray-700 caret-purple-500 text-gray-300 resize-none mt-3 shadow-md shadow-gray-600"
            rows="3"
            placeholder="Write a description..."
            name="description"
            onChange={inputChangeHandler}
            value={formState.description}
          ></textarea>
          {/* <p className="mt-2 ml-2 text-red-400 italic">
            your input field is empty
          </p> */}
          <button
            type="submit"
            className="border bg-purple-600 text-gray-400 rounded-full py-1 border-none mb-2 shadow-sm shadow-green-500 mt-5"
          >
            Add task
          </button>
          <button onClick={closeForm} className="border bg-red-400 text-red-700 rounded-full py-1 border-none shadow-sm shadow-red-200">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;
