const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { MongoClient } = require("mongodb");
require('dotenv').config()

const uri = `mongodb+srv://MateuszW:${process.env.MONGO_PASS}@cluster0.bxxiy.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useUnifiedTopology: true })

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.post('/registerNewUser', async (req, res) => {
    if(req.body.length) {
        try {
            await client.connect();

            const db = client.db('MusicShopDb')
            const collection = db.collection('USERS')

            const query = {
                displayName: "Regnar110"
            }

            const user = await collection.findOne(query)
            console.log(user)
            res.send('succes').status(200)
        } catch(err) {
            console.log(err)
        } finally {
            client.close()
        }
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