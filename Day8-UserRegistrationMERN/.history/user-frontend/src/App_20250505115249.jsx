import {useState} from "react"
import axios from "axios"

function App(){
  const [form, setForm] = useState({ name: "", email:"", password:""});

  

  return(
    <div>
      <Signup/>
    </div>
  )
} 

export default App;