import React,{useState} from "react";


import { Todoitem } from "./Todoitem";

function Todolist({todolists})
{
    
    // let newtodo =(xyz)=>{
    //     setLists([...lists,{id:uuidv4(),value:xyz}])
    // }
    // let deltodo = ({ids})=>{
    //     let todoupdated= lists.filter(list=>list.id != ids);
    //     setLists(todoupdated);
    // }
    
    return(
        
           

          <div>
              {todolists.map((list)=>(
                  <Todoitem key={list.id} list={list} />
              ))}
          </div>
        
    )
}
export default Todolist;