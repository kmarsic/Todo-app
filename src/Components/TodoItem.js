

export default function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return(
        <li className="list">
              <div className="item-container">
                <label className="form-control">
                  <input
                  className="check"
                  type="checkbox"
                  checked={completed}
                  onChange={e => toggleTodo(id, e.target.checked)}/>
                </label>
                <p className="break-words" style={{textDecoration: completed===true? "line-through" : "none", opacity: completed===true ? "0.5" : "1"}>{title}</p>
              </div>
              <button className="close" onClick={() => deleteTodo(id)} ></button>
              
            </li>
    )
}
