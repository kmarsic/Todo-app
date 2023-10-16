export default function Controls ({activeItems,handleActiveTabs,clearCompleted, activeTab}) {

    return (
    <div className="controls">
      <div id="items-left">
      {activeItems.length} items left
      </div>
      <div className="button-container">
        <div>
          <button value="all" style={{color: (activeTab === 'all') ? 'hsl(220, 98%, 61%)' : 'inherit' }} onClick={e =>handleActiveTabs(e)} className="buttons" >All</button>
        </div>
        <div>
          <button value="active" style={{color: (activeTab === 'active') ? 'hsl(220, 98%, 61%)' : 'hsl(236, 9%, 61%)' }} onClick={e => handleActiveTabs(e)} className="buttons" >Active</button>
        </div>
        <div>
          <button value="completed" style={{color: (activeTab === 'completed') ? 'hsl(220, 98%, 61%)' : 'hsl(236, 9%, 61%)' }} onClick={e => handleActiveTabs(e)}className="buttons" >Completed</button>
        </div>
      </div>
      <div>
        <button className="buttons" onClick={() => clearCompleted()}>Clear Completed</button>
      </div>
    </div>
    )
}