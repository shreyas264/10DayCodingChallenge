import {useState} from "react";

function Signup(){

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