import { useReducer } from "react"
import Home from "./home"
import Time from "./time"
import ToDOF from "./toDo"
import Counter from "./counter"
const ACTIONS={
    HOME:"/home",
    TIMER:"/time",
    TODO:"/toDo",
    COUNTER:"/counter"
}
export default function Nav(props){
    const [state,dispatch]=useReducer(reducer,"home")
    function reducer(state,{type}){
switch(type){
    case ACTIONS.HOME:{
props.set(<Home/>)
break
    }
    case ACTIONS.TIMER:{
        props.set(<Time/>)
        break
            }
            case ACTIONS.COUNTER:{
                props.set(<Counter/>)
                break
                    }
                    case ACTIONS.TODO:{
                      props.set(<ToDOF/>)
                      break
                    }
}
    }
   
    return (<>
        <div className="logo"><img src="" alt="" /></div>
        <div className="navbar">
            <ul>
            <li onClick={()=>{dispatch({type:ACTIONS.HOME})}}>Home</li>
            <li onClick={()=>{dispatch({type:ACTIONS.TODO})}}>ToDoList</li>
            <li onClick={()=>{dispatch({type:ACTIONS.TIMER})}}>Timer</li>
            <li onClick={()=>{dispatch({type:ACTIONS.COUNTER})}}>Counter</li>
        </ul>
        </div></>
    )
}