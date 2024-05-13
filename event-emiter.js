const EventEmiter = require("events")

// listener
const myEvent = new EventEmiter()

myEvent.on('birthday', ()=>{
    console.log(`happy birthday `)
})
myEvent.emit('birthday')