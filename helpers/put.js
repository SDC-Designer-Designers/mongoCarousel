const listings = require('../db/index.js').listings

async function putter({rooms,listingID},cb) {
    try{
         await listings.update({listingID:listingID}, {rooms:rooms})
        .then((res) => cb(null,res))
        .catch((err) => cb(err))
    }
    catch(ex) {
        console.log('something went wrong', ex)
    }
    finally {
        console.log('update complete')
    }
}

module.exports = putter