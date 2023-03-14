import React from 'react'

const TaskHeader = () => {
  return (
    <h3 className="mt-7 sm:mt-10 mb-2 sm:mb-4 text-xs sm:text-lg text-zinc-500 font-medium italic flex">
    Tasks <p className="text-red-400">(2)</p> - completed{" "}
    <p className="text-red-400">(1)</p> - haven't finished yet{" "}
    <p className="text-red-400">(1)</p>
  </h3>
  )
}

export default TaskHeader