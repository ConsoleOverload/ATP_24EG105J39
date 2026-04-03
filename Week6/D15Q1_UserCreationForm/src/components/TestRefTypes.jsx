import { useState } from "react";

function TestRefTypes(){
    //State
    const [user,setUser] = useState({Username:"ravi",age:21,city:"hyderabad"})
    const [marks,setMarks] = useState([10,20,30])
    //Update user state
    const updateUser =() =>{
        setUser({...user,username:"bhanu",age:23})
    }
    //Update marks
    const updateMarks =() =>{
        setMarks([40,...marks])
    }
    return(
        <div>
            <div>
                <h2>Username: {user.username}</h2>
                <h2>Age: {user.age}</h2>
                <h2>City: {user.city}</h2>
            </div>
            <button onClick={updateUser} className="p-5 bg-amber-400">
                UpdateUser
            </button>
        </div>
    )
}