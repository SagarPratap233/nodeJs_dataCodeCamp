
let http = require('http');

let server = http.createServer();

server.on('request', (req, res)=>{
    res.end('Welcome in an event Style')
})

server.listen(5000);
