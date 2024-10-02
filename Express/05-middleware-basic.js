const express = require('express')
const app = express()
const logger = require('./middleware/logger')

// request ==> middleware ==> response

app.get('/', logger, (req, res, next) => {
    res.send("Home")
})

app.listen(5000, () => {
    console.log("http://localhost:5000")
})