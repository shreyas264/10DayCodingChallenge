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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto bg-white shadow-lg p-6 rounded-xl">
        <h1 className="text-2xl font-bold mb-4">TODO APP</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter Task"
            className="flex-grow border rounded px-3 py-2"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
          />
          <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            ADD
          </button>
        </div>
        <ul>
          {todos.map(todo=>(
            <li key={todo.id} className="flex justify-between items-center mb-2" >
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
