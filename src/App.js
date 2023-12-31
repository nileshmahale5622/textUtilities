import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';
import React,{useState} from 'react'
import Alert from './Components/Alert';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from './Components/About'



function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null);
  const [red, setRed] = useState(null);
  const [green, setGreen] = useState(null);
  const redToggle=()=>{
    if(red==="red"){
      setRed(null);
      document.body.style.backgroundColor="white";
      setmode("light");
    }else{
      setRed("red");
      document.body.style.backgroundColor = "#440101";
      setmode("dark");
    }
  }
  const greenToggle = () => {
    if (green === "green") {
      setGreen(null);
      document.body.style.backgroundColor = "white";
      setmode("light");
    } else {
      setGreen("green");
      document.body.style.backgroundColor = "#041801";
      setmode("dark");
    }
  };
  const showalert=(type,message)=>{
    setalert({
      type:type,
      msg:message
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toglehandler=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = "#08123e";
      showalert("success","The dark mode has been set");
    }else{
      setmode('light');
      document.body.style.backgroundColor = "white";
      showalert("success","The light mode has been set");
    }
  }
  return (
    <>
        <Navbar
          title="TextUtils"
          mode={mode}
          toglehandler={toglehandler}
          redToggle={redToggle}
          greenToggle={greenToggle}
          red={red}
          green={green}
        />
        <Alert alert={alert} />
        <div className="container">
            {/* <Route path="/about" element={<About />}></Route> */}
            {/* <Route
              path="/"
              element={ */}
                <TextBox
                  heading="Enter the text you want to Alter"
                  mode={mode}
                  showalert={showalert}
                  red={red}
                  green={green}
                 />
        </div>
    </>
  );
}

export default App;
