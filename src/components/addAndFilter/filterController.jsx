import React from 'react'

const FilterController = () => {
  return (
    <div className="flex gap-2 justify-center mt-5">
          <button className="hover:bg-purple-900 bg-purple-800 border-2 border-purple-800 rounded-full px-3 sm:px-5 py-1 text-gray-400 shadow-sm shadow-gray-600">
            All
          </button>
          <button className="border-2 border-purple-800 rounded-full px-3 sm:px-5 py-1 text-gray-400 shadow-sm shadow-gray-600">
            Running
          </button>
          <button className="border-2 border-purple-800 rounded-full px-3 sm:px-5 py-1 text-gray-400 shadow-sm shadow-gray-600">
            Completed
          </button>
        </div>
  )
}

export default FilterController