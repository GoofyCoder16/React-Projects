import C_form from "./C_form"
import Todolist from "./todolist"
import { useEffect,useState } from "react"
export default function ToDOF(){
    const [list, setlistItem] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if (localValue == null) return []
    
        return JSON.parse(localValue)
      })
      useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(list))
      }, [list])
    
      function deletef(id){
        setlistItem(()=>list.filter(todos=>todos.id!=id))
        
      }
      function toggleto(id,completed){
        setlistItem(todos=>{
          return todos.map(todo=>{
          if(todo.id===id) return {...todo,completed}
          return todo})
        })
      }
      function lif(text){
        setlistItem((ctodo)=>{
          return([...ctodo,{id:crypto.randomUUID(),title:text,completed:false}])
         })
         console.log(list)
      }
   
    return(
        <>
          <div className="todo">
 <C_form lif={lif}/>
  <h1>AddTodo</h1>
  <Todolist deletef={deletef} toggleto={toggleto} list={list}/>
  </div>
        
        </>
    )
}