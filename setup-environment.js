const fs = require("fs");
const path = require("path");

const dir = "src/environments"
const file = "environment.prod.ts"

const content = process.env.EMAILJS_PUBLIC_KEY;

fs.access(dir, fs.constants.F_OK, (err) => {
    try{
        fs.writeFileSync(dir + "/" + file, content);
        console.log("lucky");
    }
    catch{
        console.log("unlucky");
        process.exit(1);
    }
})
