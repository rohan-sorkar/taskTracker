import React from 'react'
import TableItem from './tableItem'

const TableView = () => {
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
              <TableItem/>
          </tbody>
        </table>
  )
}

export default TableView