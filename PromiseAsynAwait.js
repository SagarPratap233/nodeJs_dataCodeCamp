const {readFile} = require('fs');
const { reject, first } = require('lodash');
const { resolve } = require('path');


// readFile('./content/first.txt', 'utf8', (err, data )=>{
//     if(err)
//     {
//         return
//     } else 
//     {
//         console.log(data);
//     }
// })

getText = (path) => {
    return new Promise ((resolve, reject) => {
        readFile(path, 'utf8', (err, data)=> {
            if(err) {
                reject(err);
            } else {  
                resolve(data);
            }
        })
    })

};
// this is one way to do that

// getText('./content/first.txt')
//     .then((result)=> console.log(result))
//     .catch((err)=>console.log(err));

// we can also use async and 

const some =  async () => {
    try{
       let first = await getText('./content/first.txt')
       let second = await getText('./content/second.txt')
       console.log(first, second);
    }
    catch(error)
    {
        console.log(error);
    }
}
some();