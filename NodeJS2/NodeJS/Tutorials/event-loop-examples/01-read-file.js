const {readFile, writeFile} = require('fs')

console.log('started the first task')
// Check your file path
// Example of async
readFile('../content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})
console.log('starting next task')