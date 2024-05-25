const jwt = require("jsonwebtoken");
const secret = "lsndfdjfkbaskjdfbksf";

// make the tokens
function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role : user.role,
    }, secret);
}

function getUser(token) {
    try {
        if (!token) return null;
        return jwt.verify(token, secret); // verify that the generated token has a secret key or not 
    } catch (error) {
        // Handle the error
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
};



// const sessionIdToUserMap= new Map(); // USING MAP TO AMP THE USER WITH ID 
// function setUser (id , user){
//     sessionIdToUserMap.set(id,user); //MAPPING USER WITH ID 
// }
// function getUser (id ){
//     return sessionIdToUserMap.get(id);
// }
// module.exports={
//     setUser,
//     getUser,
// };

