import AddAndFilterContainer from "../addAndFilter";
import TaskHeader from "../taskHeader";
import TaskViewContainer from "../task-view-Container";
import ContainerWrapper from "./containerWrapper";
import { useState } from "react";
import { fakeTasks } from "../../constants";

function Container() {
  const [tasks, setTask] = useState([...fakeTasks]);
  const [view, setView] = useState("list");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("all");

  const addTaskHandler = (task) => {
    setTask([task, ...tasks]);
  };

  const viewChangeHandler = (text) => {
    setView(text);
  };

  const selectTask = (id) => {
    const selectedTask = tasks.find((task) => task.id === id);
    selectedTask.isSelect = !selectedTask.isSelect;
    setTask([...tasks]);
  };

  const deleteTask = (id) => {
    const text = "Are you sure to Delete😕";
    if (confirm(text) == true) {
      const filteredTasks = tasks.filter((task) => task.id !== id);
      setTask([...filteredTasks]);
    } else {
      return;
    }
  };

  const changeStatus = (id) => {
    const updateTask = tasks.find((task) => task.id === id);
    updateTask.isComplete = !updateTask.isComplete;
    setTask([...tasks]);
  };

  const clearSelected = () => {
    const text = "Are you sure to Delete😕"
    if (confirm(text) == true) {
      const filteredTasks = tasks.filter((task) => !task.isSelect);
      setTask([...filteredTasks]);
    } else {
      return;
    }
  };

  const clearCompleted = () => {
    const text = "Are you sure to Delete😕"
    if (confirm(text) == true) {
      const filteredTasks = tasks.filter((task) => !task.isComplete);
      setTask([...filteredTasks]);
    } else {
      return;
    }
  };

  const reset = () => {
    setView("list");
    setSearchTerm("");
    setFilterTerm("all");
  };

  const searchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const performSearch = () => {
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchTerm) ||
        task.description.toLowerCase().includes(searchTerm)
    );
  };
  const searchedTasks = performSearch();

  const filterInputChange = (filterText) => {
    setFilterTerm(filterText);
  };

  const performFilter = (tasks) => {
    if (filterTerm === "running") {
      return tasks.filter((task) => !task.isComplete);
    } else if (filterTerm === "completed") {
      return tasks.filter((task) => task.isComplete);
    } else {
      return tasks;
    }
  };

  const filteredTasks = performFilter(searchedTasks);

  return (
    <ContainerWrapper>
      <AddAndFilterContainer
        addTaskHandler={addTaskHandler}
        view={view}
        viewChangeHandler={viewChangeHandler}
        clearSelected={clearSelected}
        clearCompleted={clearCompleted}
        reset={reset}
        searchTerm={searchTerm}
        searchInputChange={searchInputChange}
        filterTerm={filterTerm}
        filterInputChange={filterInputChange}
      />
      <TaskHeader tasks={tasks} />
      <TaskViewContainer
        tasks={filteredTasks}
        view={view}
        selectTask={selectTask}
        deleteTask={deleteTask}
        changeStatus={changeStatus}
      />
    </ContainerWrapper>
  );
}
export default Container;
