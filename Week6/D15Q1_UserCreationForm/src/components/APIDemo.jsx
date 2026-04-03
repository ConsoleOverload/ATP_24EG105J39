import { useEffect } from "react";
import { useState } from "react";

function APIDemo(){
    let[count,setCount]= useState(100);
    const changeCount =()=>{
        setCount(count+1);
    }
    let [users,setUsers]=useState([])
    let [loading,setLoading]=useState(false)
    let [error,setError]=useState(null)
    useEffect(()=>{
        async function getData(){
            //Set loading to true
            setLoading(true)
            try{
                let res = await fetch('https://jsonplaceholder.typicode.com/posts')
                let usersList = await res.json();
                //Update state
                setUsers(usersList);
            }
            catch(err){
                console.log('Err is ',err)
                //update error state
                setError(err)
            }
            finally{
                setLoading(false)
            }
        }
        getData();
    },[])
    console.log("API demo rendered")
    /*Making API req need go be in waiting until intial rendering 
    Initial render -> Display ->API call -> rerender-> display*/

    //Deal with loading state
    if(loading){
        return<p className="text-center text-5xl">Loading...</p>
    }
    //Deal with error state
    if(error !== null){
        return <p className="text-center text-red-500 text-5xl">{error.message}</p>
    }
    return(
        <div className="text-center mt-10">
            <h1 className="text-8xl text-blue-400">List of users</h1>
            <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {users.map((userObj)=>(
                <div key ={userObj.id}>
                <p>{userObj.title}</p>
                <p>{userObj.body}</p>
                </div>
            ))}
            </div>
        </div>
    )
}
export default APIDemo