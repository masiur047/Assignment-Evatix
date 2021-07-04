import { useRef, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';

function Update(props)
{

    const [name,setName]=useState(props.name);
    const [email,setEmail]=useState(props.email);
    const [phone,setPhone]=useState(props.phoneNumber);
    const [prof,setProf]=useState(props.profession);
    const [birt,setBirth]=useState();

    const nameRef=useRef();
    const phoneRef = useRef();
    const emailRef=useRef();
    const birthdayRef=useRef();
    const professionRef=useRef();

    const submitHandler = (e) =>
    {
        e.preventDefault();
        const user={
            name:name,
            phoneNumber:phone,
            email:email,
            profession:prof
        }
        console.log({user});
       
        // axios.Update(`https/domain/update/${props.id}`,{user}).
        //       then(res=>{
        //           console.log({res});
        //       }).
        //       catch(error=>{
        //           console.log({error});
        //       })
        
    }
    function namechangeHandler(event)
    {
        setName(event.target.value);
    }
    function emailchangeHandler(event)
    {
        setEmail(event.target.value);
    }
    function phonechangeHandler(event)
    {
        setPhone(event.target.value);
    }
    function profchangeHandler(event)
    {
        setProf(event.target.value);
    }
    function birthchangeHandler(event)
    {
        setBirth(event.target.value);
    }

    return (
        <form className="cont" onSubmit={submitHandler}>
            <div className="fle">
                <label>Name</label>
                <input type="text" ref={nameRef} value={name} name="name" onChange={namechangeHandler} key="name"></input>
            </div>
            <div className="fle">
                <label>Phone Number</label>
                <input type="text" ref={phoneRef} value={phone} name="phone" onChange={phonechangeHandler} key="phone"></input>
            </div>
            <div className="fle">
                <label>Email</label>
                <input type="email" ref={emailRef} value={email} name="email" onChange={emailchangeHandler} key="email"></input>
            </div>
            <div className="fle">
                <label>Date of Birth</label>
                <input type="date" ref={birthdayRef} name="birth" onChange={birthchangeHandler} key="birth"></input>
            </div>
            <div className="fle">
                <label>Profession</label>
                <input type="text" ref={professionRef} value={prof} name="prof" onChange={profchangeHandler} key="prof"></input>
            </div>

            <button type="submit">Update</button>
        </form>
    );
}

export default Update