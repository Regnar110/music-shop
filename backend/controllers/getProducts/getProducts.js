const { home } = require('./home/home')
const { shop } = require('./shop/shop')

const getProducts = async ({body: {place, shopPlace}}, res) => {
    if(place) {
        home(res, place)
    }else if(shop) {
        shop(res, shopPlace)
    }
}

module.exports = {
    getProducts
}