import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) =>{
    e.preventDefault();
    // temporary accept all email and password
    if(email && password){
      localStorage.setItem("user", email)
      navigate("/dashboard")
    }
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form className='bg-white p-8 rounded shadow-lg w-80' onSubmit={handleLogin}>
        <h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>
        <input className='w-full mb-3 p-2 border rounded' type='email' placeholder='Enter email' value={email} onChange={(e)=> setEmail(e.target.value)} required></input>
        <input className='w-full mb-4 p-2 border rounded' type='password' placeholder='Enter password' value={password} onChange={(e)=> setPassword(e.target.value)} required></input>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login