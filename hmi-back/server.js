const express = require('express')
const app = express()
const port = 3001
const db = require('./model')
app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/voltIn', db.getVoltIn)
app.get('/voltIn/last', db.getLastVoltIn)
app.get('/num', db.getNum)
app.get('/num/last', db.getLastNum)
app.post('/volt', db.addVolt)
app.post('/voltIn', db.addVoltIn)
app.post('/num', db.addNum)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})