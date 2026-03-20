import exp from 'express'
import {UserModel} from '../models/UserModel.js'
import {ArticleModel} from '../models/ArticleModel.js'
import {verifyToken} from '../middlewares/VerifyToken.js'

export const adminApp = exp.Router()

//Get all users
adminApp.get("/users", verifyToken("ADMIN"), async (req,res)=>{

    try{

        const users = await UserModel.find().select("-password")

        res.status(200).json({
            message:"All users fetched",
            payload: users
        })

    }
    catch(err){
        res.status(500).json({message:err.message})
    }

})



// 2. ACTIVATE / DEACTIVATE USER
adminApp.put("/users/:userId", verifyToken("ADMIN"), async (req,res)=>{

    try{

        const userId = req.params.userId
        const {isUserActive} = req.body

        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            {$set:{isUserActive}},
            {new:true}
        ).select("-password")

        if(!updatedUser){
            return res.status(404).json({message:"User not found"})
        }

        res.status(200).json({
            message:"User status updated",
            payload: updatedUser
        })

    }
    catch(err){
        res.status(500).json({message:err.message})
    }

})


// 3. GET ALL ARTICLES
adminApp.get("/articles", verifyToken("ADMIN"), async (req,res)=>{

    try{

        const articles = await ArticleModel.find()
            .populate("author","firstName email")

        res.status(200).json({
            message:"All articles fetched",
            payload: articles
        })

    }
    catch(err){
        res.status(500).json({message:err.message})
    }

})


// 4. DELETE ANY ARTICLE (HARD DELETE)

adminApp.delete("/articles/:articleId", verifyToken("ADMIN"), async (req,res)=>{

    try{

        const articleId = req.params.articleId

        const deletedArticle = await ArticleModel.findByIdAndDelete(articleId)

        if(!deletedArticle){
            return res.status(404).json({message:"Article not found"})
        }

        res.status(200).json({
            message:"Article deleted successfully"
        })

    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})