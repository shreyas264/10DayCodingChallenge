import { useState } from "react";

function Signup() {

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={}>
                <input name="name" placeholder="Name"  ></input>
                <input name="email" placeholder="Email" ></input>
                <input name="password" type="password" placeholder="Password" ></input>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default Signup