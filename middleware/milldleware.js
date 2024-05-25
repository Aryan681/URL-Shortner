
const fs = require("fs");

// this middleware track the no of click on the url 
function NumberOfClick(filename) {
    return (req, res, next) => {
        let date = new Date();
        fs.appendFile(filename,
          
            `\n ${date.toLocaleString()}:${req.ip}:${req.method}:${req.path}\n`, // remove parentheses
            (err, data) => {
                next();
            }
        );
    };
}

module.exports = { NumberOfClick };
