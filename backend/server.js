const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const { registerNewUser } = require('./controllers/RegisterNewUser/registerNewUser')
const { userLogin } = require('./controllers/UserLogin/userLogin')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.post('/registerNewUser', (req,res) => registerNewUser(req, res))

app.post('/userLogin', (req, res) => userLogin(req,res) )

app.listen(process.env.PORT_NUMBER, ()=> {
    console.log(`listening on ${process.env.PORT_NUMBER}`)
})