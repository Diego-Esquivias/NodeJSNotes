/* We are going to get the custom emitter class 
needed if you want to custom extend from class otherwise 
for emitting and handles events creates an instance of this class
*/

const EventEmitter = require('events')

const customEmitter = new EventEmitter

/*
The on and emit methods are to keep track of the order
You can also use additional arguments/parameters and the built in 
function/module can utilize it 
*/

customEmitter.on('response', (name,id) => {
    console.log(`data received user: ${name} with id ${id}`)
})

customEmitter.on('testing', () => {
    console.log(`Some other logic is at work here`)
})

customEmitter.emit('response', 'john', 34)
customEmitter.emit('testing')

// Example:

class TemperatureSensor extends EventEmitter{
    constructor(){
        super()
        this.temperature = 95
    }

    updateTemperature(newTemp){
        this.temperature = newTemp
        this.emit("TemperatureUpdate", newTemp)
    }
}

const sensor = new TemperatureSensor

// Listener for temp updates
sensor.on("TemperatureUpdate", (temp) => {
    console.log("Temp updated: " + temp + ' Fahrenheit')
    // OR: Trigger a new function, API call or calculation
})

// Simulate temperature changes
sensor.updateTemperature(25)
sensor.updateTemperature(104)