
const path = require("path");

process.chdir(path.join(__dirname,'smoke/template'))

describe("build-webpack test css",()=>{
    require("./unit/webpace-bass-test");

});