const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI

const home = async (res, place) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true })
    try{
        await client.connect();
        const db = client.db(process.env.MONGO_DB_NAME)
        const collection = db.collection(place)
        const result = await collection.findOne({CATEGORY:place})
        res.json(result.PRODUCTS)
    } catch(err) {
        console.log(err)
    } finally {
        await client.close();
    }
}

module.exports = {
    home
}