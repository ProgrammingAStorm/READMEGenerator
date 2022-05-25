//Node libraries
const fs = require('fs');

//Writes the data to the file and sets its extention to .md
function writeFile(readme) {
    return fs.writeFile('./dist/README.md', readme, function(err) {
        if (err) throw err;
    });
}

module.exports = writeFile;