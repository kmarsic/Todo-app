/* eslint-disable react/prop-types */
import {TaskItem} from "./TaskItem";
import { Droppable } from "react-beautiful-dnd";

export function TaskList ({currentTasks}) {
    return(
        <Droppable droppableId="ROOT" type="group">
          {(provided) => (
            <ul className="list-wrapper" {...provided.droppableProps} ref={provided.innerRef}>
                <TaskItem currentTasks={currentTasks}/> 
                {provided.placeholder}
          </ul>
          
          )}
          
        </Droppable>
    )
}