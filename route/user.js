const express = require ("express");
const { handelUserSignUp,handelUserLogin} = require ("../controller/user.js");

const router = express.Router();

// handel the login and Signup pages
router.post('/', handelUserSignUp);
router.post('/login', handelUserLogin);

module.exports=router;