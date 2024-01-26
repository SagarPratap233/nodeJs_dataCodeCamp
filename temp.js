const {readFile, writeFile} = require('fs').promises;

const some =  async () => {
    try{
       let first = await readFile('./content/first.txt', "utf-8")
       let second = await readFile('./content/second.txt', "utf-8")
       await writeFile("./content/writtenWithPromises.txt", "Legendary", "utf8")
       let third = await readFile('./content/writtenWithPromises.txt', "utf-8")
       console.log(first, second, third);
    }
    catch(error)
    {
        console.log(error);
    }
}
some();

// readFile('./content/first.txt', 'utf8', (err, data )=>{
//     if(err)
//     {
//         return
//     } else 
//     {
//         console.log(data);
//     }
// })

// getText = (path) => {
//     return new Promise ((resolve, reject) => {
//         readFile(path, 'utf8', (err, data)=> {
//             if(err) {
//                 reject(err);
//             } else {  
//                 resolve(data);
//             }
//         })
//     })

// };
// // this is one way to do that

// getText('./content/first.txt')
//     .then((result)=> console.log(result))
//     .catch((err)=>console.log(err));

// we can also use async and 
