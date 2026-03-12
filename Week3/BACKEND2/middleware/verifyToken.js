import jwt from 'jsonwebtoken'
const {verify}=jwt
export function verifyToken(req,res,next){
    console.log()
    const token = req.cookies?.token;
    //if req from unauthorized user 
    if(!token){
        return res.status(401).json({message:"pls login"})
    }
    try{
        const decodedToken = verify(token,'abcd')
        console.log(decodedToken)
        //Attach decoded user to req
        req.user = decodedToken
        next()
    }
    catch(err){
        // Invalid or expired token
        res.clearCookie("token")
        res.status(401).json({message:"pls relogin"})
    }
}