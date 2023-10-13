const fs = require("fs");
const path = require("path");

const dir = "src/environments"
const file = "environment.prod.ts"

const content = process.env.EMAILJS_PUBLIC_KEY;

fs.access(dir, fs.constants.F_OK, (err) => {
    try{
        fs.writeFileSync("src/environments/environment.prod.ts", content);
        fs.writeFileSync("src/environments/environment.ts", content);
        console.log(content, process.cwd);
    }
    catch{
        console.log("unlucky");
        process.exit(1);
    }
})
