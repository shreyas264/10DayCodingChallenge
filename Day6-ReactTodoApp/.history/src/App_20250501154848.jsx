import { useState, useEffect } from "react";

const App =()=>{
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    const stored = JSON.parse(localStorage.getItem("todos"));
    if(stored) setTodos(stored)
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  const addTodo=()=>{
    if(!task.trim()) return;
    setTodos([...todos, { id: Date.now() , text: task, completed: false}])
    setTask("")
  }

  const deleteTodo=(id)=>{
    setTodos(todos.filter(todo => todo.id !==id))
  }

  const toggleTodo=(id)=>{
    setTodos(todo =>
      todo.id === id ? {...todo, completed: !todo.completed}:todo)
  }

  return(
    <div>
      <div>
        <h1>TODO APP</h1>
        <div>
          <input
            type="text"
            placeholder="Enter Task"
            className=""
            value={task}
            onChange={(e)=>setTask(e.target.value)}
          />
          <button onClick={addTodo} className="">
            ADD
          </button>
        </div>
        <ul>
          {todo.map(todo=>(
            <li key={todo.id} className="" >
              <span onClick={()=> toggleTodo(todo.id)} className="">
                {todo.text}
              </span>
              <button onClick={()=> deleteTodo(todo.id)} className="">❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;
