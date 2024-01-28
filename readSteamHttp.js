const http = require('http')
const {ReadStream} = require('fs')

const server = http.createServer((req, res) => {
    if(req.url='/')
    {
        res.end('sme');
    }
}
);



server.listen(5000)
