import TodoItem from "./TodoItem";

export default function TodoList ({renderActiveTab, toggleTodo, deleteTodo}) {
  
    return(
        <div className="list-wrapper">
          <ul>

          {renderActiveTab().length === 0 && "Add some Todos!"}
          {renderActiveTab().map(todo => {
            return(
              <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            )
            })}
          </ul>
          
        </div>
    )
}