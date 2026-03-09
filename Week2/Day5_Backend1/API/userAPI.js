//Create User API(REST API -> REpresentational State Transfer)
/*API's contain routes 
Structure of a route
app.METHOD(path,request handler)

app -> express , router , object
METHOD-> get , post , put , delete
reuqest handler -> (request,response)=>

REST API standards dictate url path must not have verbs 
*/
//Route to handle GET req of a client(http://localhost:3001/users)

//Create mini express app(Separate route)
import exp from 'express'
const userApp=exp.Router()
let users = []  
users.push({id:1,name:"Kaustubh",age:24})
users.push({id:2,name:"Nikhil",age:25})
users.push({id:3,name:"Satyarth",age:23})
userApp.get('/users/:id',(req,res)=>{
    const userId = Number(req.params.id)
    const user = users.find(u => u.id === userId)
    if(user){
        res.json({message:"User found",payload:user})
    }else{
        res.status(404).json({message:"User not found"})
    }
})
userApp.get('/users',(req,res)=>{
    //Send res to client
    res.json({message:"all users",payload:users})
})
//Test data(Replace this test data with DB)
//Route to handle POST req of a client
userApp.post('/users',(req,res)=>{
    /*
    get user from client
    push user into users
    send res
     */
    const newUser = req.body
    users.push(newUser)
    
    res.json({message:"User created",payload:newUser})
})
//Route to handle PUT req of a client
userApp.put('/users',(req,res)=>{
    let modifiedUser = req.body;
    let index = users.findIndex(u => u.id === modifiedUser.id)
    if(index === -1){
        return res.status(404).json({message:"User not found"})
    }
    users.splice(index,1,modifiedUser)
    res.json({message:"User modified"})
})
//Route to handle DELETE req of a client
userApp.delete('/users/:id',(req,res)=>{
    console.log(req.params)
    let idOfUrl = Number(req.params.id)
    let index = users.findIndex(u => u.id === idOfUrl)
    if(index === -1){
        return res.json({message:"User not found"})
    }
    //Get id of user from url parameter
    //find index of user
    //delete user by index
    users.splice(index,1)
    res.json({message:"User deleted"})
})
/*post req and push req should send data to the api as body of 
request obj
*Get and delete requests do not support body of the request obj.
so that these 2 requests can send data through end point
*/


export {userApp}