// Updater function => A function passed as an argument to serState() usually ex. setYear(updater function )  or setYear(y=>y+1 )
//                     Allow for safe updates based on the previous state used with the multiple 
//                      state updates and ansychrounus functions Good practice to use Updater function


import React , {useState} from 'react'

function MyComponent(){
    const [count, setCount]=useState(0);

    function increment(){
        setCount(c => c+1)
        setCount(c => c+1)
        setCount(c => c+1)

    }
    function decrement(){
        setCount(c=>c-1)
        setCount(c=>c-1)
        setCount(c=>c-1)
    }
    function reset(){
        setCount(0)
    }
    return(
        <div>
            <p>Count : {count}</p>
            <button value={count} onClick={decrement}>decrement</button>
            <button value={count} onClick={reset}>Reset</button>
            <button value={count} onClick={increment}>increment</button>
        </div>
    )
}
export default MyComponent;