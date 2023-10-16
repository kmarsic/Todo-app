

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
                <p className="break-words">{title}</p>
              </div>
              <button className="close" onClick={() => deleteTodo(id)} ></button>
              
            </li>
    )
}
