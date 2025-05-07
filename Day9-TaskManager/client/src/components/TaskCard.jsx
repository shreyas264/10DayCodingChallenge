import React from 'react'

const TaskCard = ({task, onComplete}) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-4 mb-4'>
      <h3 className='text-lg font-semibold'>{task.title}</h3>
      <p className='text-sm text-gray-600'>Deadline: {task.deadline || "N/A"}</p>
      <p className={`mt-1 ${task.completed ? 'text-green-600' : 'text-red-500'}`}>{task.completed ? "Completed" : "Pending"}</p>

      {!task.completed && (
        <button onClick={() => onComplete(task._id)}
        className='mt-2 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition'>
          Mark Complete
        </button>
      )}
    </div>
  )
}

export default TaskCard