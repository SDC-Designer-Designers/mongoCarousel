const listings = require('../db/index.js').listings

async function poster({listingID},cb) {
    try{
         await listings.insertMany({listingID:listingID})
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

module.exports = poster