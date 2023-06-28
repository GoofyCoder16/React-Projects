import { useState } from "react"
import Home from "./home"
import Nav from "./nav"
export default function App(){
const [comp,setcomp]=useState(<Home/>)
function setComp(comp){
  setcomp(()=>{
    return comp
  })
}
  return(<>
  {console.log(window.location.pathname)}
  <div className="nav">
    <Nav set={setComp}/>
  </div>
  <div className="component">
    {comp} 
    </div>


</>
  )
}