import React, {useState} from 'react'

const AddTask = ({onAdd}) => {

  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!title) return;
    const task = {title, deadline, completed: false};

    const res = await fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task),
    })

    const data = await res.json();
    onAdd(data); //save returned task
    setTitle("")
    setDeadline("")
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow w-200 ">
      <div className='flex flex-col sm:flex-row gap-4 '>
        <input className='flex-1 border p-2 rounded' type='text' placeholder='Task Title' value={title} onChange={(e)=> setTitle(e.target.value)}
        required></input>
        <input className='border p-2 rounded' type='datetime-local'  value={deadline} onChange={(e)=> setDeadline(e.target.value)}
        ></input>
        <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
          Add
        </button>
      </div>
    </form>
  )
}

export default AddTask