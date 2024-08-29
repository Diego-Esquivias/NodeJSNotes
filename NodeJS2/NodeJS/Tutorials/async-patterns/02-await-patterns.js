/* Node has built in promises for many of their libraries
allowing us to skip a lot of the promise setups but you should know how to setup 
a promise anyway just in case 
*/

const {readFile, writeFile} = require('fs').promises

const start = async() => {
    try {
        const first  = await readFile('../content/first.txt', 'utf-8')
        const second  = await readFile('../content/second.txt', 'utf-8')
        await writeFile('../content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`, {flag:'w'})
        console.log(first, second)
    } catch (error) {
        console.log('You suck at coding: next line is proof')
        console.log(error)
    }
}

start()