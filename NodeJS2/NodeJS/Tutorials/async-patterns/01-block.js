/* The point of this example is that it will take a long time to 
run the loop in the middle called blocking code 
if you have 3 tabs open to the home page everything 
will load fine but change one page to /about and then 
eventually the homepages will take time to load since the about 
page is loading, thus "BLOCKING" the entire server 
*/

const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("HOME Page")
    }
    else if (req.url === '/about') {
        // Blocking code
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end("About page")
    }
    else
    res.end("Error page")
})

server.listen(5000, () => {
    console.log('Server listening on PORT: 5000...')
})