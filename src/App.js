import logo from "./logo.svg";
import "./App.css";
import Login from "./component/pages/Login/Login";
import SignUp from "./component/pages/SIgnUp/SignUp";
import Model from "./component/pages/Model/Model";
import { useState } from "react";

function App() {
  const[error ,setError] = useState(false)
  
  return (
    <>
      <SignUp  setError = {setError} />
         {error&& <Model onClose ={()=>setError(false)}  />}
      
    </>
  );
}

export default App;
