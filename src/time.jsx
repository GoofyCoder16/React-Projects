import { useState } from "react";

export default function Time(){
   const [time,settime]=useState(new Date().toLocaleDateString())
        
    setInterval(() => {
     settime(()=>{return (new Date().toLocaleTimeString())})
    }, 1000);
    return (
     <div className="time">
        <h1>{time}</h1>
        </div>
    )
}