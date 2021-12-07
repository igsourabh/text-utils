import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
// import Darkmode from "./components/Darkmode";
import Crs from "./components/Crs";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");
const [state, setstate] = useState("")
const [enable, seteanble] = useState("enable dark mode")
 
const togglemode = () => {
    if (mode ==="light") {
      setmode("dark");
   document.body.style.backgroundColor="#262626"
   setstate("bg-dark")
   seteanble("Disable dark mode")
    }
    else{
      setmode("light");
   document.body.style.backgroundColor="white"
   setstate("")
   seteanble("Enable dark mode")

    }
  };
  return (
    <>
      <div className="conatiner"></div>

      <Navbar
        title="tetutiles"
        abouttext="aboututils"
        mode={mode}
        togglemode={togglemode}
        enable={enable}
      />

      <Crs title="Textutils App" 
        mode={mode}
        state={state}/>
    </>
  );
}

export default App;
