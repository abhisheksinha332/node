const {readFile, writeFile} = require("fs");

readFile('./content/first.txt','utf8', (err,result)=>{
    if(err){
        console.log(err);
        return 
    }
    const first = result;
    readFile('./content/secons.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
    writeFile('./content/forth.txt',`Here is ${first} and ${second} text`,(err, result)=>{
        if(err){
            console.log(err);
            return
        }
        const  third = result;
        console.log(third);
    });
    })
})