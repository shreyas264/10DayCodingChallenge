import {useState} from "react"
import axios from "axios"

function App(){
  const [form, setForm] = useState({ name: "", email:"", password:""});

  const handleChange = (e) =>{
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    fetch("http://localhost:5000/register",{
      method: "POST",
      headers:{
        'Content-Type': "application/json"
      },
      body: JSON.stringify(form) 
    })
    .then(res => res.json)
    .then (data => {
      console.log('Response:', data)
      alert("User registered")
    })
    .catch(err=>{
      console.log("Fetch error", err)
    })
  };

  return(
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} ></input>
        <input name="email" placeholder="Email" onChange={handleChange}></input>
        <input name="password" type="password" placeholder="Password" onChange={handleChange}></input>
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
} 

export default App;