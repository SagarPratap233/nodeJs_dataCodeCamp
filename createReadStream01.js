
// write a file with a lot of text 
// const {writeFileSync} = require('fs');


// for(let i = 0; i<100000; i++)
// {
//     writeFileSync('./content/big.txt', `Some Words ${i}`, {flag:'a'});
// }


const {createReadStream} = require('fs');
const { setDefaultHighWaterMark } = require('stream');

const readStream = createReadStream("./content/big.txt", {highWaterMark: 9000, encoding : 'utf8'});

// default buffer size : 64kb
// we can change buffer size 
// we can also add encodingf as well 

readStream.on('data', (result)=> {
    console.log(result);
})

readStream.on('error', (err)=> {
    console.log(err);
})

