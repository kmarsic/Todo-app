import { useEffect } from "react";
import { AddTaskForm, Header, TaskList, Controls } from "./Components"
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { selectAllTasks, modifyTasks, selectActiveTasks, selectCompletedTasks } from "./redux/features/manageTasks/taskSlice";
import { currentTab } from "./redux/features/manageTasks/activeTabSlice";

function App() {
  const allTasks = useSelector(selectAllTasks);
  const activeTasks = useSelector(selectActiveTasks)
  const completedTasks = useSelector(selectCompletedTasks)
  const activeTab  = useSelector(currentTab);
  const dispatch = useDispatch()


  const selectTasks = () => {
    switch (activeTab) {
    case "active" :
      return activeTasks;
    case "all":
      return allTasks;
    case "completed":
      return completedTasks
    }}

  const currentTasks = selectTasks();


  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(allTasks))

  }, [allTasks])


  const handleDragDrop = (results) => {
    const {source, destination, type} = results;

    if (!destination) return;

    if(source.droppableId === destination.droppableId && source.index === destination.index) return
    
    if(type === "group") {
      const reorderedTodos = [...currentTasks]
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedStore] = reorderedTodos.splice(sourceIndex, 1);
      reorderedTodos.splice(destinationIndex,0, removedStore);
      
      dispatch(modifyTasks({reorderedTodos, activeTab}))
    }
  }

  return (
  <div className='container'>
    <Header/>
    <AddTaskForm/>
    <div className="width">
    <DragDropContext onDragEnd={handleDragDrop}>
      <TaskList currentTasks={currentTasks}/>
    </DragDropContext>
    <Controls activeTasks={activeTasks} activeTab={activeTab}/>
    </div>
  </div>
  );
}

export default App;