import { useContext } from "react";
import { counterContextObj } from "../context/ContextProvider"
//import Test from "./Tes"
import { useCounterStore } from "../store/CounterStore"
function Home() {
 let newCounter = useCounterStore((state)=>state.newCounter)
 let incrementCounter=useCounterStore((state)=>state.incrementCount)
  console.log('Home');
  
    return (
    <div>
        <h1>Counter:{counter}</h1>
        <button onClick = {changeCounter}>change</button>
    </div>
  )
}

export default Home