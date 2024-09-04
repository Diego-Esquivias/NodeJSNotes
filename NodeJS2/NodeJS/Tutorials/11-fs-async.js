const {readFile, writeFile, readFileSync, writeFileSync} = require('fs')


// // Asynchronous read and write example
// readFile('./Content/big.txt', 'utf-8', (err, firstDate) => {
//     if(err){
//         console.error(err)
//         return
//     }
//     readFile('./Content/second.txt', 'utf-8', (err, secondDate) => {
//         if(err){
//             console.error(err)
//             return
//         }
//         const result = `${firstDate} and ${secondDate}`

//         writeFile('./Content/result-mind-grenade.txt', result, (err) => {
//             if(err){
//                 console.error(err)
//                 return
//             }
//             console.log("Asynchronous write complete")
//         })
//     })
// })

// for (let index = 0; index < 10000; index++) {
//     console.log("Testing server...")    
// }


// Synchronous 
try {
    const firstData = readFile('./content/first.txt', 'utf8')
    for (let index = 0; index < 10000; index++) {
        console.log("Testing server...")        
    }
    const secondDate = readFileSync('./content/second.txt', 'utf8')
    const result = `${firstDate} and ${secondDate}`
    writeFileSync('./content')
} catch (err) {
    
}