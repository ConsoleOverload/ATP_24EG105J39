import { useState } from "react"

function Counter() {
    const [count,setCount] = useState(0)    
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }
    return(
        <div className="text-center p-10 border">
            <h1 className="text-6xl">
                Count : {count}
            </h1>
            <button className="bg-green-500 px-6 py-3 mr-10" onClick={increment}>+</button>
            <button className="bg-red-500 px-6 py-3 mr-10" onClick={decrement}>-</button>
            <button className="bg-orange-500 px-6 py-3 mr-10" onClick={()=>reset(0)}>Reset</button>
        </div>
    )
}
export default Counter