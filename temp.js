const http = require('http')
const {ReadStream} = require('fs')
const fs = require('fs')


const server = http.createServer((req, res) => {
    // const text = readFileSync('./content/big.txt', "utf8")
    // res.end(text);
    const fileStream  = fs.createReadStream('./content/big.txt', 'utf8');

    fileStream.on('open', ()=>{
        fileStream.pipe(res)
    })
} 
);



server.listen(5000)
