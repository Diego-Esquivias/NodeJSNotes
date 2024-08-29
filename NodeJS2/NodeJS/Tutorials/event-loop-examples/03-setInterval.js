setInterval(() => {
    console.log('Hello world!')
}, 2000);
console.log('I will run first')
/*
Process stays alive unless
You kill the process using Ctrl+c
Unexpected Errors or logical errors can and will happen
Be careful
*/
// To avoid infinite loops use clearInterval()