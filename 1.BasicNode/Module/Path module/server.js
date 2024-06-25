const path = require("node:path");

// ABSOLUTE PATH: Path that starts from "/"

// RELATIVE PATH: 1. That starts from "./"
//                2. That starts from filename/anything

console.log(__filename, typeof __filename);
console.log(__dirname, typeof __dirname);

console.log(path.extname("../FileSystem module/filesFolder/file.txt"));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
console.log(path.parse("../FileSystem module/filesFolder/file.txt"));

console.log(path.isAbsolute(__filename)); // true
console.log(path.isAbsolute("../FileSystem module/filesFolder/file.txt")); // false
console.log(path.isAbsolute(__dirname)); // true
console.log(path.isAbsolute("server.js")); // false

// CREATION OF RELATIVE PATH.
const clsa = "class";
const path1 = path.join("school", `${clsa}`, "standard", "index.js"); // school/class/standard/index.js;
const path2 = path.join("school", "class", "standard", "../index.js"); // school/class/index.js;

console.log(path1, path.isAbsolute(path1));
console.log(path2, path.isAbsolute(path2));

// CREATION OF ABSOLUTE PATH.
const path3 = path.resolve("school", `${clsa}`, "standard", "index.js");
console.log(path3, path.isAbsolute(path3));
