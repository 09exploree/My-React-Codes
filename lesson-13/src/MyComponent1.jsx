import React ,{useState,useEffect} from "react";

function MyComponent1(){
 const [count,setCount]=useState(0);
 const [color,setColor]=useState("green")

 useEffect( ()=>{
    document.title=`Count : ${count}`

    return()=>{
    // SOME CLEANUP CODE   
    }
 },[count])

function addCount(){
   setCount( c=>c+1)
}
function subtractCount(){
    setCount( c=>c-1)
}
function changeColor(){
    setColor(c=>c==="green"?"red":"green")
}
return(
    <>
    <p style={{color:color}}>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button> <br />
    <button onClick={changeColor} >Change Color</button>
    </>
 )
}
export default MyComponent1;