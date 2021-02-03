const { MongoClient } = require("mongodb");
const bcrypt = require('bcrypt');

const uri = process.env.MONGO_URI

const registerNewUser = async (req, res) => {
        const client = new MongoClient(uri, { useUnifiedTopology: true })
        try {
            const {nick, userName, email, password} = req.body
            await client.connect();           
            const db = client.db(process.env.MONGO_DB_NAME)
            const collection = db.collection('USERS')
            const hashPass = await bcrypt.hash(password, 10);
            const checkUserExist = await collection.findOne({displayName: nick, email: email});

            if (checkUserExist === null) {
                const userDocument = {
                    displayName: nick,
                    name: userName,
                    email: email,
                    password: hashPass
                }
                await collection.insertOne(userDocument)
                res.send('succes').status(200)
            } else {
                res.send('failed-user-exists')
            }
        } catch(err) {
            console.log(err)
            res.send('failed')

        } finally {
            await client.close()
        }
}

module.exports = {
    registerNewUser
}