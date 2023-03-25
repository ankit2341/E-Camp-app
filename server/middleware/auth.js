const jwt=require("jsonwebtoken");
require("dotenv").config();

const auth=(req,res,next)=>{
    const token=req.headers.authorization;
    if(token){
        const decoded=jwt.verify(token,process.env.secret);
        if(decoded){
            next();
        }
        else{
            res.status(400).send({"msg":"Invalid token"});
        }
    }
    else{
         res.status(400).send({"msg":"Login First"});
    }
};

module.exports={
    auth
}