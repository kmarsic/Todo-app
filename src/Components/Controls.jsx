/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { clearCompletedTasks } from "../redux/features/manageTasks/taskSlice";
import { handleTabs } from "../redux/features/manageTasks/activeTabSlice";

export function Controls ({activeTab, activeTasks}) {
 
  const dispatch = useDispatch();

    return (
    <div className="controls">
      <div id="items-left">
      {activeTasks.length} items left
      </div>
      <div className="button-container">
        <div>
          <button 
          value="all"
           style={{color: (activeTab === 'all') ? 'hsl(220, 98%, 61%)' : 'inherit' }} 
           onClick={e => dispatch(handleTabs(e.target.value))} 
           className="buttons">All</button>
        </div>
        <div>
          <button 
          value="active"
          style={{color: (activeTab === 'active') ? 'hsl(220, 98%, 61%)' : 'hsl(236, 9%, 61%)' }} 
          onClick={e => dispatch(handleTabs(e.target.value))} 
          className="buttons" >Active</button>
        </div>
        <div>
          <button 
          value="completed" 
          style={{color: (activeTab === 'completed') ? 'hsl(220, 98%, 61%)' : 'hsl(236, 9%, 61%)' }} 
          onClick={e =>dispatch(handleTabs(e.target.value))}
          className="buttons" >Completed</button>
        </div>
      </div>
      <div>
        <button className="buttons" 
        onClick={() => dispatch(clearCompletedTasks())}>Clear Completed</button>
      </div>
    </div>
    )
}