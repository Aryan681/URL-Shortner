const {getUser}= require("../SERVICE/auth");



async function  restrictedToLoginUserOnly(req,res,next){
//  const userUid = req.cookies?.uid;

 const userUid = req.headers["authorization"]; // authorization is the built in 
 if(!userUid) return res.redirect("/login");
 const token = userUid.split("Bearer")[1] ;
 const user= getUser(token);
 
//  const user = getUser(userUid);
 if (!user) return res.redirect("/login");
 req.user=user;
 next();
}

async function checkAuth (req,res,next){
//  const userUid = req.cookies?.uid;
//  const user = getUser(userUid);
    const userUid = req.headers["authorization"];
    const token = userUid.split("Bearer")[1] ;
    const user= getUser(token);
    req.user=user;
    next();
}
module.exports={restrictedToLoginUserOnly,checkAuth, };