import React, {useEffect, useState} from 'react'
import AddTask from "../components/AddTask"
import TaskCard from "../components/TaskCard"


const Dashboard = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (task) =>{
    setTasks(tasks=>[...tasks, task])
  }

  const handleComplete = async (id) =>{
    const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "PUT",
    })

    const updatedTask = await res.json();
    setTasks((prevTasks) =>
      prevTasks.map((task)=> (task._id === id ? updatedTask : task))
    )
  }

  useEffect(()=>{
    const fetchTasks = async () =>{
      const res = await fetch("http://localhost:3000/api/tasks")
      const data = await res.json();
      setTasks(data)
    }
    fetchTasks
  }, [])

  return (
    <div className='p-4 bg-gray-100 min-h-screen'>
      <h1 className='text-3xl font-bold mb-4 text-center'>Task Dashboard</h1>
      <div className="items-center">
      <AddTask onAdd={addTask}/>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md-grid-cols-3 gap-4 mt-6'>
        {tasks.map((task)=>(
          <TaskCard key={task._id} task={task} onComplete={handleComplete}/>
        ))}
      </div>
    </div>
  )
}

export default Dashboard