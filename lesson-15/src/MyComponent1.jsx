// useState() = Re-render the component when the state value changes

// useRef() = "use Reference " Does not cause re-rendering when its value changes.
//              when you want a component to "remember" some information,
//              but you don't want that information to trigger new renders.

//              1. Accessing/Interacting with DOM element
//              2. Handling focus , Animation and Transitions 
//              3. Mapping timeres and intervals

import React , {useState,useEffect,useRef} from "react"

function MyComponent1(){

    // const ref=useRef("PIZZA");
    const inputRef1=useRef(null);
    const inputRef2=useRef(null);
    const inputRef3=useRef(null);
    
    // console.log(ref)
    useEffect( ()=>{
        console.log("COMPONENT RENDERED")
    })

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor="yellow"
        inputRef2.current.style.backgroundColor=""
        inputRef3.current.style.backgroundColor=""

    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor=""
        inputRef2.current.style.backgroundColor="yellow"
        inputRef3.current.style.backgroundColor=""

    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor=""
        inputRef2.current.style.backgroundColor=""
        inputRef3.current.style.backgroundColor="yellow"

    }

    return(<div>
    <button onClick={handleClick1}>Click me 1!</button> 
    <input ref={inputRef1} />

    <button onClick={handleClick2}>Click me 2!</button> 
    <input ref={inputRef2} />

    <button onClick={handleClick3}>Click me 3!</button> 
    <input ref={inputRef3} />
    </div>)
}
    export default MyComponent1;
