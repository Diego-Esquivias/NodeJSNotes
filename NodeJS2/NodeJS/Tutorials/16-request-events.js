const http = require('http')

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end("This is the home page")
//     }
//     // ...etc
// })

// server.listen(5000, () => {
//     if(err){
//         console.log(err)
//     }
//     console.log("Currently listening on port 5000")
// })

// Using the Event Emitter API
const server = http.createServer()
// Emits request event
// Subscribe to it / listen for it / respond to it
server.on("request", (req, res) => {
    if(req.url === '/'){
        console.log(req.url)
        res.end("Home Page")
    } else if (req.url === '/about'){
        console.log(req.url)
        res.end("About Page")
    } else{
        res.end("404")
    }
})

server.listen(5000, (err) => {
    if(err){
        console.log(err)
    }
    console.log("Currently listening on port 5000") // Get on the server by typing http://localhost:5000/
})
