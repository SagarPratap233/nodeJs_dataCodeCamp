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