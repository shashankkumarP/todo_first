import React,{useState} from "react";

import Todolist from "./Todolist";
import {v4 as uuidv4} from "uuid";
import "./List.css";
// import AddIcon from '@mui/icons-material/Add';

export default function Todo()
{
   let [todolists,setTodolists] = useState([]);
   let [newtodo,setNewtodo] = useState("")

    return (
       
        <div >
            <div className="todowala">
                <input value={newtodo} onChange={(e)=>setNewtodo(e.target.value)}  />
                <div onClick={()=>{
                    setTodolists([...todolists,{id:uuidv4(),value:newtodo}]);
                    setNewtodo("");
                }}><i className="fa-solid fa-plus"></i></div>
            </div>
            
            <Todolist todolists={todolists}/>
        </div>     
                                                     
            
    )
}