import { useState, useEffect } from "react";
import NewTodoForm from "./Components/NewTodoForm";
import TodoList from "./Components/TodoList";
import Header from "./Components/Header";
import Controls from "./Components/Controls";

function App() {
  const [todos, setTodos] = useState(() => {
  const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });
  const [activeTab, setActiveTab] = useState("active");

  const activeItems = todos.filter(todo => {
    return todo.completed === false;
  })

  const completedItems = todos.filter(todo => {
    return todo.completed === true;
  })

  function handleActiveTabs(e, isActiveTab) {
    setActiveTab(e.target.value);

  }

  function renderActiveTab() {
    if (activeTab === "all") {
      return todos
    }
    if (activeTab === "active") {
      
      return activeItems;
      
    } 
    if (activeTab === "completed") {
      return completedItems;
    }
  }
  


  useEffect( () => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  },[todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: false}
      ]
    });
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  };

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    })
  }

  function clearCompleted() {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.completed === false)
    })
  }
  return (
  <div className='container'>
    <Header/>
    <NewTodoForm onSubmit={addTodo}/>
    <div className="width">
    <TodoList renderActiveTab={renderActiveTab} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    <Controls activeItems={activeItems} activeTab={activeTab} clearCompleted={clearCompleted} handleActiveTabs={handleActiveTabs}/>
    </div>
  </div>
  );
}

export default App;