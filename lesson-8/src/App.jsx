// React hool=> Specific function that allows functional component to use React features
//              without writing class component (React v16.8)
//               (useState , useEffect , useContext ,useReducer , useCallback , and more ...)

// useState=>   A React hook that allow the creation of the stateful variable and setter  function 
//              to update its value in the virtual DOM [name , setName]
                 

import MyComponent from "./MyComponent"
import Counter from "./Counter.jsx"
function App() {
    return(
        <Counter/>
    )
}

export default App
