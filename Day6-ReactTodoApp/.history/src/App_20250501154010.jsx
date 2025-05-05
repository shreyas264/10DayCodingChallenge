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
}
