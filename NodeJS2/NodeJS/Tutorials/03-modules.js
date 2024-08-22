// CommonJS, every file is a module (by default)
// Modules - Encapsulated code (only share the minimum)

const name =  require('./04-name')
const message = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')


console.log(data.items[0])
console.log(data.marriedPerson)


console.log(name.Shakira)
message(name.Shakira)