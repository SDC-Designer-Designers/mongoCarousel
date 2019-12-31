const listings = require('../db/index.js').listings

async function getter({id},cb) {
    try{
         await listings.find({listingID:id}).lean()
        .then((res) => cb(null,res))
        .catch((err) => cb(err))
    }
    catch(ex) {
        console.log('something went wrong', ex)
    }
    finally {
        
        console.log('query complete')
    }
}

module.exports = getter