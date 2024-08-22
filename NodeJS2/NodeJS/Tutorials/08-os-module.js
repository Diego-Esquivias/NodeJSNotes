const os = require('os')

// Info about the current users device 
const user = os.userInfo()
console.log(user)

// Method returns the system uptime in seconds
function covertTime(seconds) {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600)/60)
    const secs = Math.floor(seconds % 60)
    return `${hours}: ${minutes}: ${secs}`
}
console.log(covertTime(os.uptime()))
// Convert to hours mins and seconds

const currentOS = {
    name: os.type(), 
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem(),
    device: os.platform(),
    arch: os.arch(),
}

console.log(currentOS)