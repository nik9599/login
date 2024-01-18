import React,{useRef} from "react";
import "./model.css";

export default function Model({onClose}) {

    const modelRel  = useRef();

    const closeModal = (e)=>{
       if(modelRel.current === e.target){
        onClose();
       }
    }

  return (
    <div  ref={modelRel} onClick={closeModal} className="MP">
      <div className="ID" >
        <button onClick={()=>onClose()} >
          {" "}
          <i class="fa-solid fa-xmark fa-lg"></i>
        </button>
        <div className="ID2" >
            <h1>You have a Weak Password && Please accept the terms</h1>
        </div>
      </div>
    </div>
  );
}
