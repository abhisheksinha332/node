const os = require('os');


///Info about current user

const user = os.userInfo();
console.log(user);

// Method returns system uptmime in seconds

console.log(os.uptime()/3600);

const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);