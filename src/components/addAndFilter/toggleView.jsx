import React from 'react'

const ToggleView = () => {
  return (
    <div className="flex justify-center gap-3 bg-slate-800 mt-6 w-60 sm:w-64 py-2 rounded-sm mx-auto">
          <button
            className="bg-indigo-500 text-gray-900
       px-3 border-2 border-gray-400"
          >
            List view
          </button>
          <button
            className="
         text-gray-300 px-3 border-2 border-gray-400"
          >
            Table view
          </button>
        </div>
  )
}

export default ToggleView