const http = require('http');
// console.log(http);
const server = http.createServer((req, res) => {
    // res.write('hello kuch aaya kya?');
    // res.end();

    if(req.url==='/')
    {
        res.end("Welcome this is the home page");
    }
    if(req.url==='/about')
    {
        res.end("What do you wanna, bitch!!");
    }
    res.end(`
    <h1>Ops!</h1>
    <p>The page you are looking for does not exists</p>
    <a href = '/'> please click the link to do to homepage</a>
    `)

});

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
