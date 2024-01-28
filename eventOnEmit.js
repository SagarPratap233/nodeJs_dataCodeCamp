const eventEmitter = require("events");

const someEvent = new eventEmitter();

someEvent.on('response', ()=>{
    console.log("Event has been listened")
})
someEvent.on('love', (name, age)=> {
    console.log(`love from ${name} from ${age} years!`)})

someEvent.emit('response');
someEvent.emit('love', 'Sagar', '26');