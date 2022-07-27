// import logo from './logo.svg';
import './App.css';
import Navbar from './componts/Navbar';
import Image from './componts/Image';
import About from './componts/About';
import React,{useEffect, useState} from 'react'
function App() {
const [theme, setTheme] = useState(false);

useEffect(()=>{
  if(theme){
    document.body.style.backgroundColor = "#272727";

  } else{
    document.body.style.backgroundColor = "#fff";

  }
},[theme])


  return (
    <>
    <Navbar theme={theme} setTheme={setTheme} />
    <div className="container">
    <Image/>
    <About/>
    </div>
    </>
  );
}

export default App;
