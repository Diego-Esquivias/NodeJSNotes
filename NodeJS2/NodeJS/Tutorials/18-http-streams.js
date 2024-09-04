var http = require('http')
var fs = require('fs')

/* In this example you can check 
*/

http 
    .createServer(function(req, res){
        // This is a non streamed version to show that it takes much longer
        // const text = fs.readFileSync('./Content/big.txt', 'utf8')
        // res.end(text)
        
        // This is the Streamed version
        const fileStream = fs.createReadStream('./Content/big.txt', 'utf8')
        fileStream.on("open", () => {
            fileStream.pipe(res)
        })
        fileStream.on("error", (err) => {
            res.end(err)
        })
    })
    .listen(5000, () => {
        console.log('listening on port 5000')
    })