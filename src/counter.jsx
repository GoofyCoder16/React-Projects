import { useEffect, useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(()=>{return Number(localStorage.getItem("Count"))})
    useEffect(()=>{localStorage.setItem("Count",count)},[count])
  
    function increment(){
setCount(no=>{return ++no})
    }
    function decrement(){
        
        if(count>0) setCount(no=>{return --no})
            }
    return (
    <div className="counter">
        <h1>Counter</h1>
       <div className="pointer"><button onClick={decrement}>-</button>
        <h1>{count}</h1>
        <button onClick={increment}>+</button></div> 
       <div className="reset"> <button onClick={()=>setCount(()=>0)}>Reset</button>
       </div></div> 
    )
}