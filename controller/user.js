const User = require("../model/user");
const {setUser}= require("../SERVICE/auth");
const { v4: uuidv4 } = require('uuid'); // it generate the short session ids 

// create the new user
async function handelUserSignUp(req, res) {
    const {name,email,password} = req.body;
    await User.create({
     name,
     email,
     password,  
    });
    return res.redirect("/",);
}

// search for the user in the database 
async function handelUserLogin(req, res) {
    const {email,password} = req.body;
    const user = await User.findOne({email,password});
    if (!user) return res.render("login",{ error : "invalid username or password"});
    //Stateful
        // const sessionId = uuidv4();
        // setUser(sessionId,user);
        // res.cookie('uid',sessionId);
        // return res.redirect("/",);
   //Stateless 
      const token = setUser(user);
      res.cookie('token',token);
      return res.redirect("/",);
    // return res.json({token});
}
module.exports={ handelUserSignUp,handelUserLogin};