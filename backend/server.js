const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()


const app = express()

app.use(cors())
app.use(bodyParser.json())

app.post('/registerNewUser', (req, res) => {
    if(req.body.length) {
        console.log(req.body)
        res.send('succes').status(200)
    } else if(!req.body.length) {
        res.send('failed').status(400)
    }
})

app.post('/userLogin', (req, res) => {
    if(req.body.length) {
        console.log(req.body)
        res.send('succes').status(200)
    } else if(!req.body.length) {
        res.send('failed').status(400)
    }
})

app.listen(process.env.PORT_NUMBER, ()=> {
    console.log(`listening on ${process.env.PORT_NUMBER}`)
})