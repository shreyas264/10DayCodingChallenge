import {useState} from "react"
import axios from "axios"

function App(){
  const [form, setForm] = useState({ name: "", email:"", password:""});

  const handleChange = (e) =>{
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:5000/register", form);
      alert(res.message);
    } catch(err){
      alert("error:" + err.response.message)
    }
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