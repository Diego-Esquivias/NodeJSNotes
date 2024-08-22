const {readFileSync, writeFileSync} = require('fs')
const path = require('path')
console.log("Winter Is Here...")

const first = readFileSync(path.join(__dirname, '/content/first.txt'), 'utf8')
const second = readFileSync(path.join(__dirname, '/content/second.txt'), 'utf8')
const third = readFileSync(path.join(__dirname, '/content/first.txt'), 'ucs2')

console.log(third)

/* 
ascli
base64
base64url (Node v14+)
hex
ucs2/ucs-2/utf161e/utf-161e
utf8/utf-8
binary/latin
*/

writeFileSync(path.join(__dirname, "/content/Falseresult.txt"), `Here is the result: ${first}, ${second}`, {flag:'a'})
console.log("Task Completed")