import React from "react";
import ListItem from "./listItem";

const ListView = (props) => {
  const { tasks, selectTask, deleteTask, changeStatus } = props;
  return (
    <div>
      {tasks.length > 0 &&
        tasks.map((task) => (
          <ListItem
            key={task.id}
            task={task}
            selectTask={selectTask}
            deleteTask={deleteTask}
            changeStatus={changeStatus}
          />
        ))}
    </div>
  );
};

export default ListView;
