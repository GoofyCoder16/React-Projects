
export default function Todolist({deletef,toggleto,list}){
    return  (
 <ul>
 {list.length==0 && "NoTodos"}
{list.map(todos=>{
    return (<li key={todos.id}>
        <input type="checkbox" id={todos.id} onChange={(e)=>toggleto(todos.id,e.target.value)}/>{todos.title}
        <button onClick={()=>{deletef(todos.id)}}>Delete</button>
        </li>)
}) }


</ul>)
}