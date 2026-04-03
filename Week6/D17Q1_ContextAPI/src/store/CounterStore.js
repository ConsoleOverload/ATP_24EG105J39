import {create} from 'zustand'
//create store
export const useCounterStore = create((set)=>({
    //State
    newCounter:0,
    newCounter1:100,
    //Add user state (name,age,email)
    user:{name:'ravi',email:'ravi@gmail.com',age:21},
    //Function to change email
    changeEmail:()=>set({...user,email:'test@gmail.com'}),
    //Function to change name and age
    changeNameAndAge:()=>set({...user,name:'Vikas',age:23}),
    //Functions to modify the state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    incrementCounter1:()=>set(state=>({newCounter1:state.newCounter1+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}),
    //Function to change newCounter to 500
    incrCounter1:()=>set(state=>({newCounter:500})),
    //Function to decrement newCounter1 by 20
    decrCounter1:()=>set(state=>({newCounter1:state.newCounter1-20}))

}))