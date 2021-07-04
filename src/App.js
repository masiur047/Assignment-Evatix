import logo from './logo.svg';
import './App.css';
import { useState} from 'react';

function App() {

  const [colorName,setColor]=useState("white");
  const [fontColor,setFont]=useState("black");
  const [fontFam,setFontFam]=useState("")

  const redHendler=(e)=>{
    setColor("red");
  }
  const greenHendler=(e)=>{
    setColor("green");
  }
  const blueHendler=(e)=>{
    setColor("blue");
  }
  
  const cyanhandler=(e)=>{
    setFont("cyan");
  }
  const purplehandler=(e)=>{
    setFont("purple");
  }
  const blackhandler=(e)=>{
    setFont("black");
  }

  const robotohandler=(e)=>{
    setFontFam("roboto");
  }
  const ubuntuhandler=(e)=>{
    setFontFam("ubuntu");
  }
  const courierhandler=(e)=>{
    setFontFam("courier new");
  }

  const resetHandler=(e)=>{
    setFontFam("");
    setColor("white");
    setFont("black")
  }

  return (
    <div className="App">
      <div>
          background color:
         <button style={{background:"red"}} onClick={redHendler}>RED</button>
         <button style={{background:"green"}} onClick={greenHendler}>GREEN</button>
         <button style={{background:"blue", color:"white"}} onClick={blueHendler}>BLUE</button>
      </div>
      <div>
         Font Family:
         <button style={{background:"red"}} onClick={ubuntuhandler}>Ubuntu</button>
         <button style={{background:"green"}} onClick={robotohandler}>Roboto</button>
         <button style={{background:"blue", color:"white"}} onClick={courierhandler}>Courier New</button>
      </div>
      <div>
         Font Color:
         <button style={{background:"cyan"}} onClick={cyanhandler}>Cyan</button>
         <button style={{background:"purple"}} onClick={purplehandler}>Purple</button>
         <button style={{background:"black", color:"white"}} onClick={blackhandler}>Black</button>
      </div>
      <div>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <div style={{height:"500px", width:"500px" , background:colorName, color:fontColor, fontFamily:fontFam, borderStyle:"solid", textAline:"center"}}>
        Change the color
      </div>
    </div>
  );
}

export default App;
