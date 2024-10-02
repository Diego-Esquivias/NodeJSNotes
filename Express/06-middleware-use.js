const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const authorize = require('./middleware/authorize');

/*
req ==> middleware ==> response
Order matters if you place the app.use after the home pathway get, then it wont run on the home get pathway since the response will end before the middleware has a chance to run

If you have server middleware then you can call them in an array where again order matters 
*/

app.get('/', (req, res) => {
    res.send('Welcome Home!')
})

app.use(logger)

app.get('/about', (req, res) => {
    res.send('About')
})

app.listen(5000, (req, res) => {
    console.log('Server is running on port 5000')
})