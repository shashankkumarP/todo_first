import React,{useState} from 'react';
import "./List.css"
export const Todoitem = ({list}) => {
  let [colors,setColors] = useState("green")
  
  return (
    <div className='maindiv'>
      <div>{list.value}</div>
      <div style={{backgroundColor:colors}} className="div1"><div className='div2' onClick={()=>{
        setColors(colors==="green" ? "blue":"green")
      }}></div></div>
    </div>
  )
}
