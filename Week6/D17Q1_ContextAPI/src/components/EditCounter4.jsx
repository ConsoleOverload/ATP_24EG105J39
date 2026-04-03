import {useContext} from 'react'
import { counterContextObj } from '../context/ContextProvider.jsx'
function EditCounter4() {

  const {counter,incrementCounter,decrementCounter} =useContext(counterContextObj)
  return (
    
        <div>Edit Counter 4
        <div className='bg-orange-400 text-6xlxl text-center '>
        <h1 className="text-4xl text-center">{counter}</h1>
        <button onClick={incrementCounter} className='bg-green-600 p-5 '>+</button>
        <button onClick={decrementCounter} className='bg-red-600 p-5'>-</button>
        </div>
        </div>
  )
}

export default EditCounter4