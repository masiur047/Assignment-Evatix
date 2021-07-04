import { useRef,useState } from 'react'

function SignUp()
{
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [prof,setProf]=useState('');
    const [birt,setBirth]=useState('');

    const nameRef=useRef();
    const phoneRef = useRef();
    const emailRef=useRef();
    const birthdayRef=useRef();
    const professionRef=useRef();

    function submitHandler(e)
    {
        e.preventDefault();

        const user={
            id:id,
            name:name,
            phoneNumber:phone,
            email:email,
            profession:prof
        }
        console.log({user});
        // axios.post(`https/domain/create`,{user}).
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
                <input type="text" ref={nameRef} value={name} name="name" onChange={namechangeHandler} key="id"></input>
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

            <button type="submit">Submit</button>
        </form>
    )
}

export default SignUp