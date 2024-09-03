const {writeFileSync} = require('fs')

// Every bit of data is written to the end of the file
for (let i = 0; i < 10000; i++) {
    writeFileSync('./Content/big.txt', `Hello world ${i}\n`, {flag: 'a'})
}


// // Every bit of data overwrites that last bit of data
// for (let i = 0; i < 10000; i++) {
//     writeFileSync('./Content/big.txt', `Hello world ${i}\n`, {flag: 'w'})
// }

// // Errors because its trying to write on a read only file 
// for (let i = 0; i < 10000; i++) {
//     writeFileSync('./Content/big.txt', `Hello world ${i}\n`, {flag: 'r'})
// }