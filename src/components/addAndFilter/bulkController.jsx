import React from 'react'

const BulkController = () => {
  return (
    <div className="flex gap-2 justify-center mt-5">
          <button className="hover:bg-orange-900 bg-orange-800 border-2 border-orange-800 rounded-full text-xs sm:text-base px-1 sm:px-5 py-2 sm:py-1 text-gray-400 shadow-sm shadow-gray-600">
            Clear selected
          </button>
          <button className="border-2 border-orange-800 rounded-full text-xs sm:text-base px-1 sm:px-5 py-2 sm:py-1 text-gray-400 shadow-sm shadow-gray-600">
            Clear Completed
          </button>
          <button className="border-2 border-orange-800 rounded-full text-xs sm:text-base px-1 sm:px-5 py-2 sm:py-1 text-gray-400 shadow-sm shadow-gray-600">
            Reset
          </button>
        </div>
  )
}

export default BulkController