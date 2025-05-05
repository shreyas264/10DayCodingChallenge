import {useState} from "react"
import axios from "axios"
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App(){
  const [form, setForm] = useState({ name: "", email:"", password:""});

  

  return(
    <div>
      <Signup/>
    </div>
  )
} 

export default App;