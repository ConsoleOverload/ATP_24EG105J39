import { useState,createContext } from 'react'
export const counterContextObj = createContext()
function ContextProvider({children}) {
    //State
    const [counter,setCounter] = useState(10)
    //Functions to change state
    const changeCounter=()=>{
        setCounter(counter+1)
    }
  return (
    <counterContextObj.Provider value = {{counter,changeCounter}}>
        {children}
    </counterContextObj.Provider>
  )
}

export default ContextProvider