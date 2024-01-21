const FS = require('fs');
// console.log(FS);

const {readFile, writeFile} =  FS;

readFile("./content/first.txt", "utf8", (err, result)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    // console.log(result);
    let first = result;

    readFile("./content/second.txt", 'utf8', (err, result)=> {
        if(err)
        {
            console.log(err);
            return;
        }
        // console.log(result);
        let second =  result;

        writeFile("./content/WrittenFromAsynchronous", `add asynchronous ${first} and ${second}`, (err, result)=> {

            if(err)
            {
                console.log(err);
                return;
            }
            console.log(result);
        })
       
    })
    
});
