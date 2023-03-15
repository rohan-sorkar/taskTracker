import React from "react";
import AddTaskContainer from "./add-task";
import BulkController from "./bulkController";
import FilterController from "./filterController";
import SearchPanel from "./searchPanel";
import ToggleView from "./toggleView";

const AddAndFilterContainer = (props) => {
  const {addTaskHandler, view, viewChangeHandler, clearSelected, clearCompleted, reset, searchTerm, searchInputChange, filterTerm, filterInputChange} = props;

  return (
    <>
      <AddTaskContainer addTaskHandler={addTaskHandler} />

      <SearchPanel searchTerm={searchTerm} searchInputChange={searchInputChange} />

      <FilterController filterTerm={filterTerm} filterInputChange={filterInputChange} />

      <BulkController clearSelected={clearSelected} clearCompleted={clearCompleted} reset={reset}  />

      <ToggleView view={view} viewChangeHandler={viewChangeHandler} />
    </>
  );
};

export default AddAndFilterContainer;
