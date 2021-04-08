const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/secons.txt','utf8');

console.log(first);
console.log(second);
console.log("hello");

writeFileSync('./content/third.txt',`Here is ${first} and ${second}`, {flag : 'a'});
const third = readFileSync('./content/third.txt','utf-8');
console.log(third);
