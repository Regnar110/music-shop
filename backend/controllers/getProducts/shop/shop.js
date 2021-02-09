const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI

const shop = async (res, shopPlace) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true })
    try {
        await client.connect();
        const db = client.db(process.env.MONGO_DB_NAME)
        const collection = db.collection(shopPlace)
        if(shopPlace === 'ALL') {
            console.log('wszystkie')
        } else {
           const result = await collection.find({TYPE:shopPlace})
           console.log(result)
        }
    } catch(err) {

    } finally {
        await client.close();
    }
}

module.exports = {
    shop
}