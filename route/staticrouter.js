const express = require ("express");
const Url = require("../model/model");
const { restrictionTo } = require("../middleware/auth");
const router = express.Router();

// Only Admin can aces this page
router.get("/admin/urls",restrictionTo(["Admin"]),async (req,res)=>{
    const  allUrls = await Url.find({}); //give all url which have been generate by all the users
        res.status(200).render("home",{
            urls :allUrls,
        });
        
    });

// home page for the specific authorize users
router.get('/',restrictionTo(["Normal", "Admin"]) ,async (req,res)=>{
    const  allUrls = await Url.find({createdBy: req.user._id}); // display the urls you created
        res.status(200).render("home",{
            urls :allUrls,
        });
        
    });
    
//render the login and Signup pages
router.get('/signup',async (req,res)=>{
        res.status(200).render("Signup");
        
    });
router.get('/login',async (req,res)=>{

        res.status(200).render("login");
        
    });
    
module.exports = router ;