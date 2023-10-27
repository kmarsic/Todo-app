/* eslint-disable react/prop-types */
import { Draggable } from "react-beautiful-dnd";
import { removeTask, toggleCompletedTasks } from "../redux/features/manageTasks/taskSlice";
import { useDispatch } from "react-redux";

export function TaskItem({currentTasks}) {

  const dispatch = useDispatch();

  const draggables = currentTasks.map((task, index) => {
    return(
    <Draggable draggableId={task.id} key={task.id} index={index}>
      {(provided) => (
        <li className="list" ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
           <div className="item-container"> 
              <label className="form-control"> 
              <input 
              className="check" 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => dispatch(toggleCompletedTasks({id: task.id, completed: !task.completed}))}/>
              </label>
              <p 
              className="break-words" 
              style={{textDecoration: task.completed===true? "line-through" : "none", opacity: task.completed===true ? "0.5" : "1"}}>
              {task.title}
              </p> 
            </div> 
            <button className="close" onClick={() => dispatch(removeTask(task.id))}></button>
        </li>
      )}

    </Draggable>
    )
  })
  return draggables
}