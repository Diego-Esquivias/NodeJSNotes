const {readFile, writeFile, readFileSync, writeFileSync, read, write} = require('fs')
const path = require('path')
console.log("Winter is boring...")

// readFile and writeFile are asynchronous allowing for the program to continue execution until the other process has completed 

// readFileSync and writeFileSync are synchronous and will stop to execute the process before executing the rest of the code

readFileSync(path.join(__dirname, 'content/first.txt'), 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result
    console.log(first)
    readFileSync(path.join(__dirname, 'content/first.txt'), 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result
        console.log(second)
        writeFileSync(path.join(__dirname, '/content/results-async.txt'), `here is the result: ${first},${second}`, (err, result) => {
            if (err){
                console.log(err)
                return
            }
            console.log('Done with this task')
        })
    })
})
console.log('Starting next task')