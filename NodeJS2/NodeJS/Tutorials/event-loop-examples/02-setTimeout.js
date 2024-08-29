// Started Operating system process
console.log('First')
setTimeout(() => {
    console.log('Second')
}, 0)
console.log('Third')
// Ended Operating system process
// To avoid infinite loops use clearTimeout()