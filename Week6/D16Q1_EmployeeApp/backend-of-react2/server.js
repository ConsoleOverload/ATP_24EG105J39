import exp from 'express'
import {connect} from 'mongoose'
import { EmployeeApp } from './APIs/EmployeeAPI.js'
import cors from "cors"
const app = exp()
const port = 4002
//Add cors middleware
app.use(cors({
  origin: ["http://localhost:5173"]
}))
//Add body parser
app.use(exp.json())

app.use('/employee-api',EmployeeApp)
//Connect to db server
async function connectDB() {
    try{
        await connect("mongodb://localhost:27017/mydb")
        console.log("Connection successful")
        app.listen(port,()=>console.log('Server on port ',port))
    }
    catch(err){
        console.log('Err in db connection: ',err)
    }
}
connectDB();
//Error handling middleware
app.use((err, req, res, next) => {
  //ValidationError
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  //CastError
  if (err.name === "CastError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }

  //send server side error (include message for easier debugging)
  res.status(500).json({ message: "error occurred", error: err.message || "Server side error" });
}); 
