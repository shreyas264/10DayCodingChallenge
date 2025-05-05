import {useState} from "react"
import axios from "axios"
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App(){
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
  )
} 

export default App;