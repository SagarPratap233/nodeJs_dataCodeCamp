const eventEmitter = require("events");

const someEvent = new eventEmitter();

someEvent.on('response', ()=>{
    console.log("Event has been listened")
})

someEvent.emit('response');
