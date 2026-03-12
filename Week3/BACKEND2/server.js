import exp from 'express'
import {connect} from 'mongoose'
import {userApp} from './APIs/UserApi.js'
import {productApp} from './APIs/ProductApi.js'
import cookieParser from 'cookie-parser'
import {config} from 'dotenv'

config(); //process.env.PORT , process.env.DB_URL 

const app = exp()
const port = process.env.PORT || 4000
// Add body parser
app.use(exp.json())
app.use(cookieParser())
// Mount routers
app.use('/user-api', userApp)
app.use('/product-api', productApp)
//Connect to DB server
async function connectDB(){
    try{
        await connect(process.env.DB_URL)
        console.log("Connection successful")
        app.listen(port,()=>console.log("server on port 4000...."))
    }
    catch(err){
        console.log("err in DB connection : ",err)
    }
}
connectDB()
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


