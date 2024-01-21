const os = require('os');
const user = os.userInfo();

console.log(user);
console.log()

const details = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freemMen : os.freemem()

}
console.log(details);

