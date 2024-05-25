const Url = require("../model/model");
const shortID = require("shortid");

// Create and Save a new URL
async function handelGenerateNewShortUrl(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: ' url is required' })
    const shortId =  shortID();
    await Url.create({

        shortId: shortId,
        originalUrl: body.url,
        visitHistory: [],
        createdBy :req.user._id,
    });

    return res.render("home.ejs",{ id: shortId });
    
}

// this can handel the no of hte click and the redirection if the new url created
async function handelNewShortUrl(req, res) {
    const shortId = req.params.shortId; // requesting the shorted id
    const entry = await Url.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: { timeStamp: Date.now() }, // 
            },
        },
    );

     res.redirect(entry.originalUrl);
}

module.exports = { handelGenerateNewShortUrl,handelNewShortUrl };