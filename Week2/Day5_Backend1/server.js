//Create HTTP server
import exp from 'express'
import {userApp} from "./API/userAPI.js"
import {productApp} from "./API/productAPI.js"
const app = exp()
//Use body parser middleware
app.use(exp.json())
//create custom middleware
function middleware(req,res,next){
    //Send res from middleware
    //res.json({message:"this res from middleware"})
    //console.log("middleware executed")
    
    next()
}
//use middleware
app.use(middleware)
app.use('/user-api',userApp)
app.use('/product-api',productApp)
//Set a port number
const port = 3001
//Assign port number to HTTP server
app.listen(port,()=>console.log(`Server listening to port ${port}...`))

























