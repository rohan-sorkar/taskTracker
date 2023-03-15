import React from "react";

const TaskHeader = ({tasks}) => {
  const {running, complete} = tasks.reduce((acc, cur) => {
    if(cur.isComplete) {
      acc.complete += 1
    } else {
      acc.running += 1
    }

    return acc;
  }, {running: 0, complete: 0})

  return (
    <h3 className="mt-7 sm:mt-10 mb-2 sm:mb-4 text-xs sm:text-lg text-zinc-500 font-medium italic flex">
      Tasks <p className="text-red-400">({tasks.length})</p> - completed{" "}
      <p className="text-red-400">({complete})</p> - haven't finished yet{" "}
      <p className="text-red-400">({running})</p>
    </h3>
  );
};

export default TaskHeader;
