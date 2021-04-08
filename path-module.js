const path = require('path');

console.log(path.sep);

console.log(path.join('/content','subcontent','text.txt'));

const pathName = path.join('/content','subcontent','text.txt');

const baseName = path.basename(pathName);

console.log(baseName);

const absolute = path.resolve(__dirname, 'content','subcontent','text.txt');

console.log(absolute);