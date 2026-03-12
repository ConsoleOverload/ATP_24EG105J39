//create mini-express app(separate route)
import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { ProductModel } from '../models/productModel.js'
import { hash,compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middleware/verifyToken.js' 
import {config} from 'dotenv'
const {sign}=jwt
export const userApp=exp.Router()
config()



//creating user login
userApp.post("/login",async(req,res)=>{
    //get user credentials from request
    const {email,password} = req.body
    // verify email
    let user= await UserModel.findOne({email:email})
    //if email doesnt exist
    if(!user){
        return res.status(400).json({message:"Invalid Email."})
    }
    //comparing passwords
    let result= await compare(password,user.password)
    //if passwords doesnt match
    if(result===false){
        return res.status(400).json({message:"Invalid Password."})
    }
    //if passwords are matched, create token jsonwebtoken
    const signedToken= sign({email:user.email},process.env.SECRET_KEY,{expiresIn:"1hr"})
    //store token as httpOnly cookie
    res.cookie("token",signedToken,{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    })
    res.status(200).json({message:"Login success",paylord:user})
})

 //DEFINE USER REST API ROUTES
    //Create new User
    userApp.post("/users",async(req,res)=>{
        //get new user obj from request
        const newUser=req.body
        //hash the password
        const hashedPassword=await hash(newUser.password,12)
        //replace plain password with the hashed password
        newUser.password= hashedPassword
        //Create newUserDocument
        const newUserDocument=new UserModel(newUser)
        //save
        const result= await newUserDocument.save()
        console.log("result: ", result)
        //send res
        res.status(201).json({message:"User Created."})
    })

    userApp.get("/users",verifyToken,async(req,res)=> {
        //get user details from req
        let userObj = req.user
        //reaad all the users from db 

        let userList=await UserModel.find();
        //send res
        res.status(200).json({messaage:"users",payload:userList})
    })

    userApp.get("/user",verifyToken,async(req,res)=> {
        //read user email from req
        const emailOfUser = req.user?.email;
        console.log(emailOfUser)
        //find user by id
        const userObj=await UserModel.findOne({email : emailOfUser}).populate("cart.product")  //use findOne() to readd a document with non object id fields.// use findById() to read document with object id.
        //if user not found
        if(!userObj){
            return res.status(404).json({message: "User not found"})
        }
        //send res
        res.status(404).json({message: "User",payload: userObj})
    })

    userApp.put("/users/:id",verifyToken,async(req,res)=>{
        //get modified user from the req
        const modifiedUser= req.body
        const uid=req.params.id
        //find user by ID and update
        const updatedUser= await UserModel.findByIdAndUpdate(uid,{ $set:{ ...modifiedUser}},{new: true,runValidators:true})
        //send res
        res.status(200).json({message:"User Modified",payload:updatedUser})
    })

    userApp.delete("/users/:id",verifyToken,async(req,res)=> {
        //read object id from req params
        const uid=req.params.id
        //find user by id
        const deletedUser=await UserModel.findByIdAndDelete(uid) //({_id:uid})  //use findOne() to readd a document with non object id fields.// use findById() to read document with object id.
        //if id not found
        if(!deletedUser)
        {
            return res.status(404).json({message:"User not found."})
        }
        //send res
        res.status(200).json({message:"User deleted.",payload:deletedUser})
    })
    userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
        const pid = req.params.pid

        const product = await ProductModel.findById(pid)
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }

        // Get current user details from token
        const emailOfUser = req.user?.email
        if (!emailOfUser) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        //Before add , first it should check that product is already in the cart 
        //If the product is there , then increment count by 1
        //Otherwise add that product to cart


        // add product to cart (store as ObjectId reference)
        const result = await UserModel.findOneAndUpdate(
            { email: emailOfUser },
            { $push: { cart: { product: product._id } } },
            { new: true }
        )

        if (!result) {
            return res.status(404).json({ message: "User not found" })
        }

        res.status(200).json({ message: "Product added to cart", cart: result.cart })
    })
   /*
    userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
        const pid = req.params.pid

        const product = await ProductModel.findById(pid)
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }

        // Get current user details from token
        const emailOfUser = req.user?.email
        if (!emailOfUser) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        //Before add , first it should check that product is already in the cart 
        //If the product is there , then increment count by 1
        //Otherwise add that product to cart
        const checkUser = await ProductModel.findOne({email: emailOfUser})
        const Exists = checkUser.cart.find(c=> c.product === product._id)
        if(Exists){
            await UserModel.findOneAndUpdate(
                {product: product.count++}
            )
        }
        else{
            const result = await UserModel.findOneAndUpdate(
            { email: emailOfUser },
            { $push: { cart: { product: product._id } } },
            { new: true }
        )
        }
        

        // add product to cart (store as ObjectId reference)
        const result = await UserModel.findOneAndUpdate(
            { email: emailOfUser },
            { $push: { cart: { product: product._id } } },
            { new: true }
        )

        if (!result) {
            return res.status(404).json({ message: "User not found" })
        }

        res.status(200).json({ message: "Product added to cart", cart: result.cart })
    })*/
//app.use(verifyToken)  --> executes for every operation
//userApp.get(,auth,) ----> executes for sepecified req