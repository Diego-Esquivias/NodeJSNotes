const express = require('express')
const path = require('path')
const app = express()

// Set up Static Middleware
/* Middleware code in the middle of the request and the response cycle of the node.js execution. 
It also provides access to many functions like request and response objects
Response Object is passed as the second argument/parameter to the requestListener function.

The response object represents the writeable stream back to the client
--write() Sends text or text streams to the client 
--writeHead() Sends status and response headers to the client
--end() signals that the servers should consider that the response is complete
--getHeader() Returns the value of the specified header 
--setTimeout() Sets the timeout value of the socket to the specified value in milliseconds
--statusCode() Returns the status code that will be sent to the client


For the writeHead and statusCode methods the following are accepted:
100-199 Information Response
200-299 Successful Response
300-399 Redirection
400-499 Client Error
500-599 Server Error
You can find a detailed list 

The Request object is made by a client to a named host which is located on the server.
The aim of the request is to access resources on the server.
A proper HTTP request is made contains the following:
-- A request line
-- A series of HTTP headers
-- A message body (if needed)

Request Line:
Has 3 main aspects:
-- A method like GET, UPDATE, DELETE... etc tells the server what should be done with the resource 
-- The path component identifies the resources on the server
-- The HTTP version number showing what specification to which the client has tried to make the message comply

HTTP Headers:
HTTP Headers are written on a message to provide the recipient with information about the request, the sender and the way in which the sender wants to communicate with the server/recipient
Ex. {'Content-Type': 'text/html'} others include 
*/

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
    console.log(req.url)

    res.sendFile(path.resolve(__dirname, '/public/index.html'))
})

app.post('/', (req, res) => {
    console.log(req.url)

    res.status(404).send("You know you don't post on the index Right?")
})

app.get('*', (req, res) => {
    res.status(404).send("404 not found- and you suck")
})

app.listen(5000, () => {
    console.log("Listening on port 5000")
})