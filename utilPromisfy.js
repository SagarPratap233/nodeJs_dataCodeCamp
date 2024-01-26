const {readFile, writeFile} = require('fs');
const { reject, first } = require('lodash');
const { resolve } = require('path');
const util = require('util');

const readFilePromised = util.promisify(readFile);
const writeFilePromised = util.promisify(writeFile);


const some =  async () => {
    try{
       let first = await readFilePromised('./content/first.txt', "utf-8")
       let second = await readFilePromised('./content/second.txt', "utf-8")
       await writeFilePromised("./content/writtenWithPromisify.txt", "Legendary", "utf8")
       console.log(first, second);
    }
    catch(error)
    {
        console.log(error);
    }
}
some();
