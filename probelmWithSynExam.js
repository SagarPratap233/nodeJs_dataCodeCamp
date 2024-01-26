const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url==='/')
    {
        res.end("You are home");
    }
    if(req.url==='/about')
    {
        //Blocking code
        
        for(let i = 0; i<100000; i++)
        {
            for(let j = 0; j<100000; j++)
            {
                console.log(`${i} and ${j}`)
            }
        }
        res.end('You know me already');
        
    }
    res.end('Nothing you have just forgotten your path I think');
}
);

// with the function for about has some operations it takes a lot of time to be executes thats why we need asynchronous




server.listen(5000, () => {
    console.log('server is listeing at port 5000...');
});