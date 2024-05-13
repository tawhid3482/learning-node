const EventEmiter = require("events")

// listener
const myEvent = new EventEmiter()

myEvent.on('birthday', ()=>{
    console.log(`happy birthday `)
})
myEvent.on('birthday', (gift)=>{
    console.log(`happy birthday ${gift} `)
})

myEvent.emit('birthday', 'watch')