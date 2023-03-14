import AddAndFilterContainer from "../addAndFilter";
import TaskHeader from "../taskHeader";
import TaskViewContainer from "../task-view-Container";
import ContainerWrapper from "./containerWrapper";

function Container() {
  return (
    <ContainerWrapper>
      <AddAndFilterContainer />
      <TaskHeader />
      <TaskViewContainer />
    </ContainerWrapper>
  );
}
export default Container;
