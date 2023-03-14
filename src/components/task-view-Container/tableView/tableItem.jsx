import React from 'react'

const TableItem = () => {
  return (
    <tr
                className="border-b border-gray-500 hover:bg-gray-800 text-gray-400"
              >
                <td className="py-3 px-2 sm:px-6 text-left">
                  <input
                    className="accent-green-400 ring-green-500 ring-2 h-2 sm:h-4 w-2 sm:w-4"
                    type="checkbox"
                  />
                </td>
                <td className="py-3 px-2 sm:px-6 text-left">
                  <p>hello world program...</p>
                </td>
                <td className="py-3 text-center">
                  <p>
                    friday, 14/3/2023
                  </p>
                </td>
                <td className="py-3 px-2 sm:px-6 text-right">
                  <button
                    className="bg-green-500 text-xs sm:text-base px-2 sm:px-3 py-1 rounded-xl text-white" >
                    Completed
                  </button>
                </td>
              </tr>
  )
}

export default TableItem