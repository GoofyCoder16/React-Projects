import { useState } from "react"
export default function C_form({lif}){
    const [text,settext]=useState("")

    function addf(e){
        e.preventDefault()
        lif(text)
        settext("")
        }
    return <form onSubmit={addf}>
   <div><label htmlFor="textinput">Title</label></div>
   <div>  <input type="text" onChange={(e)=>{
        settext(e.target.value)
      }} value={text} id="textinput"/></div>
    <div>  <button type="submit">Add</button></div>
      </form>
      
}