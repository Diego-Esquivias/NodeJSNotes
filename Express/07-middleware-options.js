const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.static("./public"))

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.sendFile('Welcome Home Chumps!')
})
app.get('/about', (req, res) => {
    res.send('About you: Still a Chump')
})
app.get('/api/products', (req, res) => {
    res.send('Products for Chumps')
})
app.get('/api/items', (req, res) => {
    res.send('Items for Chumps')
})
app.get('*', (req, res) => {
    res.end('404 crap not found')
})
app.listen(5000, () => {
    console.log('Server is running on port 5000')
})