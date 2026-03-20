import exp from 'express'
import { verifyToken } from '../middlewares/VerifyToken.js'
import {ArticleModel} from '../models/ArticleModel.js'
export const userApp = exp.Router()
//Read articles of all authors
userApp.get("/articles", verifyToken("USER"), async (req, res) => {

    const articlesList = await ArticleModel.find({ isArticleActive: true })

    res.status(200).json({
        message: "articles",
        payload: articlesList
    })

})
//Add comment to an article
userApp.put("/articles",verifyToken("USER"),async(req,res)=>{
    //Get body from req
    const {articleId,comment}=req.body
    // Check article
    const articleDoc = await ArticleModel.findOne({_id: articleId})
    //If article not found
    if(!articleDoc){
        return res.status(404).json({message:"Article not found"})
    }
    //Get user id
    const userId = req.user?.id
    //add comment to comments array of articleDocument
    articleDoc.comments.push({user:userId,comment:comment})
    //Save
    await articleDoc.save()
    res.status(200).json({message:"Comment added successfully",payload:articleDoc})

})