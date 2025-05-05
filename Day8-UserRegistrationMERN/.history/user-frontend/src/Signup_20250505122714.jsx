import { useState } from "react";
import axios from 'axios'

function Signup() {
    const [name, setName]= useState()
    const [email, setEmail] = useState()
    const [password, setPassword]= useState()

    const handleSubmit = (e) =>{
        e.preventDefault()

        axios.post('', {name, email, password})
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" className="border p-2 w-full rounded" onChange={(e) => setName(e.target.value)}></input>
                <input name="email" placeholder="Email" className="border p-2 w-full rounded" onChange={(e) => setEmail(e.target.value)}></input>
                <input name="password" type="password" placeholder="Password" className="border p-2 w-full rounded" onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit" className="bg-blue-500 text-white w-full p-2 rounded hover:bg-blue-600">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Signup