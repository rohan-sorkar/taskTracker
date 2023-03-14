import React from "react";
import AddTaskContainer from "./add-task";
import BulkController from "./bulkController";
import FilterController from "./filterController";
import SearchPanel from "./searchPanel";
import ToggleView from "./toggleView";

const AddAndFilterContainer = () => {
  return (
    <>
      <AddTaskContainer />

      <SearchPanel />

      <FilterController />

      <BulkController />

      <ToggleView />
    </>
  );
};

export default AddAndFilterContainer;
