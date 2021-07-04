import { useState } from "react";
import axios from "axios";

function SignIn()
{
    const [email, setEmail]=useState('');
    const [password,setPassword]=useState('');

    function emailChangeHandler(e)
    {
        setEmail(e.target.value)
    }

    function passwordChangeHandler(e){
        setPassword(e.target.value);
    }

    function submitHandler(e){
        e.preventDefault();
        const login={
            password: password,
            email:email
        }
        console.log({login});
        axios.post("http//domain/login",{login}).
              then((res)=>{
                  console.log({res})
              }).
              catch((error)=>{
                  console.log({error})
              })
    }
    
    return (
        <form className="cont" onSubmit={submitHandler}>
            <div className="fle">
                <label>Email</label>
                <input type="email" value={email} onChange={emailChangeHandler} ></input>
            </div>
            <div className="fle">
                <label>Password</label>
                <input type="password" value={password} onChange={passwordChangeHandler}></input>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default SignIn