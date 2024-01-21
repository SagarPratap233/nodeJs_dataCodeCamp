// const FS = require('fs');
// // console.log(FS);


// const {readFileSync, writeFileSync} =  FS;

// let first = readFileSync("./content/first.txt", "utf8");
// console.log(first);
// let second = readFileSync("./content/second.txt", "utf8");
// console.log(second);

// let third = writeFileSync("./content/writtenFromFirstAndSecond", `addition of two files ${first} and ${second}`, {flag: 'a'});

// console.log(third);


const FS = require('fs');
// console.log(FS);
console.log('start');
const {readFile, writeFile} =  FS;

readFile("./content/first.txt", "utf8", (err, result)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    // console.log(result);
    let first = result;

    console.log('second');
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

console.log('third');


//prints first third and then second