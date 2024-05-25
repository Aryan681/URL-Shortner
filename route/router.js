const express = require ("express");
const {handelGenerateNewShortUrl,handelNewShortUrl  } = require("../controller/controller");

const router = express.Router(); //importing the in-built route i

router.post("/",handelGenerateNewShortUrl);  //generate url
router.get("/:shortId",handelNewShortUrl); // give the new Shorted url

module.exports= router;