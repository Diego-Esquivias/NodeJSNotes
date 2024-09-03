const {readFile, writeFile} = require('fs')
const path = require('path')
let ip  = "127.0.0.1"

const myPromise = new Promise(function (resolve, reject) {
    // Async Operation go here

    if (ip === "127.0.0.1" || ip === "127.0.0.5") {
        resolve("Success")
    } else {
        reject("Failed Mission No Respawn")
    }
})
console.log(myPromise)

// Next Promise Example: 
let actualFile = path.join(__dirname, "/Content/first.txt")
function processData(data) {
    return new Promise((resolve, reject) => {
        // You can alter or modify the data here
        setTimeout(() => {
            resolve(data.toUpperCase()) // Covert data to upper case
        }, 500); // delay half a second
    })
}

function saveData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Where you could save it locally using a writefile operation
            resolve(`Data saved: ${data}`)
        }, 500); // Delay half a second
    })
}

// Usage
function readFilePromise(pathway) {
    return new Promise((resolve, reject) => {
        readFile(pathway, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// Using the Functions
readFilePromise(actualFile)
    .then(content => processData(content))
    .then(processedData => saveData(processedData))
    .then(result => {
        console.log(result) // Outputs Data Saved and the content upperCased
    })
    .catch(error => {
        console.log(error)
    })