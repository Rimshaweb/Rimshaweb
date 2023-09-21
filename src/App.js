import './App.css';
import Header from './Components/Header'
import Alert from './Components/Alert';
import Home from './pages/Home';
import About from './pages/About';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('light');
  const showAlert=(message,type)=>{
       setAlert({
        msg:message,
        type:type
       })
       setTimeout(() => {
        setAlert(true);
      },3000);
  }
 

  const  toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#243152'
      document.body.style.color ='white'
      showAlert("Enabled Dark Mode","success");
      document.title="Netsol Dark Mode";
      
    }
   else{
    setMode('light');
    document.body.style.backgroundColor ='white'
    document.body.style.color ='black'
    showAlert("Enabled Light Mode","success");
    document.title="Netsol Light Mode";

   }
  }
     
  return (
      <Router>
         <div className="App">
        <Header title="Hamra"  mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
        </div>
    </Router>
  );
}

export default App;
