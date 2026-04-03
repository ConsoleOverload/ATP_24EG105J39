import { useState,createContext } from 'react'
export const counterContextObj = createContext()
function ContextProvider({children}) {
    //State
    const [counter,setCounter] = useState(0)
    const [counter1,setCounter1] = useState(10)

    //Functions to change state
    const incrementCounter=()=>{
        setCounter(counter+1)
    }
    const decrementCounter=()=>{
        setCounter(counter-1)
    }
    const changeCounter=()=>{
        setCounter1(counter+1)
    }

  return (
    <counterContextObj.Provider value = {{counter,counter1,incrementCounter,decrementCounter,changeCounter}}>
        {children}
    </counterContextObj.Provider>
  )
}

export default ContextProvider