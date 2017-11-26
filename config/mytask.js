var fs = require("fs");
var filename = "./config/test.html";

// sync check file is existed.
if(fs.existsSync(filename)) {
    // remove file
    fs.unlinkSync(filename);
    console.log( filename + " removed.");
}

fs.writeFileSync(filename, "Hello, world.");
console.log( filename + " closed.");