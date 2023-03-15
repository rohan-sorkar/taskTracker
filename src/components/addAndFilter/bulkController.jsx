import React from "react";

const BulkController = (props) => {
  const {clearSelected, clearCompleted, reset} = props;
  return (
    <div className="flex gap-2 justify-center mt-5">
      <button onClick={clearSelected} className="hover:bg-orange-900 transition border-2 border-orange-800 rounded-full text-xs sm:text-base px-1 sm:px-5 py-2 sm:py-1 text-gray-400 shadow-sm shadow-gray-600">
        Clear selected
      </button>
      <button onClick={clearCompleted} className="hover:bg-orange-900 transition border-2 border-orange-800 rounded-full text-xs sm:text-base px-1 sm:px-5 py-2 sm:py-1 text-gray-400 shadow-sm shadow-gray-600">
        Clear Completed
      </button>
      <button onClick={reset} className="hover:bg-orange-900 transition border-2 border-orange-800 rounded-full text-xs sm:text-base px-1 sm:px-5 py-2 sm:py-1 text-gray-400 shadow-sm shadow-gray-600">
        Reset
      </button>
    </div>
  );
};

export default BulkController;
