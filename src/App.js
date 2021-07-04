import './App.css';
import DropDown from './dropDown';
import { useState } from 'react';
import Button from './button';


const option=["React Js","Next js","java script","type script"]
function App() {
  const[selected,setSelected]=useState("Select One");
  const buttonHandler=(e)=>{
    alert("clicked me");
  }
  return (
    <div className="container">
      <DropDown selected={selected} setSelected={setSelected} options={option} />
      <Button label="Clicked me" onClick={buttonHandler}/>
    </div>
  );
}

export default App;
