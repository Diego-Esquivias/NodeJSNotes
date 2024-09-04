const {createReadStream, createWriteStream} = require('fs')

// Default size of a chunk in bytes is 64kb 
// Last buffer - The remainder left 
// highWaterMark - Controls the size of the chunks 

const stream = createReadStream('./Content/big.txt', {encoding: 'utf8'}, {highWaterMark: 90000})

stream.on("data", function (chunk){
    console.log(chunk)
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
})
stream.on("error", function (err){console.log(err)})
