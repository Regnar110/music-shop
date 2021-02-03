const { MongoClient } = require("mongodb");
const bcrypt = require('bcrypt');

const uri = process.env.MONGO_URI

const userLogin = async (req,res) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true })
    const {email, password} = req.body
    try{ 
        await client.connect();
        const db = client.db(process.env.MONGO_DB_NAME)
        const collection = db.collection('USERS')
        const userDb = await collection.findOne({email: email})
        console.log(userDb)

        if(userDb === null) {
            res.json({response: 'not-exists'})
        } else {
            const passwordCheck = await bcrypt.compare(password, userDb.password);
            if(passwordCheck) {
                const userObject = {
                    displayName: userDb.displayName,
                    email: userDb.email
                }
                res.json(userObject).status(200)
            } else {
                res.json({response: 'not-exists'})
            }
        }
    } catch(err) {
        console.log(err)
    } finally {
        await client.close();
    }
}

module.exports = {
    userLogin
}