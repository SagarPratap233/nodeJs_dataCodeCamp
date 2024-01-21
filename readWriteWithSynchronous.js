const FS = require('fs');
// console.log(FS);

const {readFileSync, writeFileSync} =  FS;

let first = readFileSync("./content/first.txt", "utf8");
console.log(first);
let second = readFileSync("./content/second.txt", "utf8");
console.log(second);

let third = writeFileSync("./content/writtenFromFirstAndSecond", `addition of two files ${first} and ${second}`, {flag: 'a'});

console.log(third);
