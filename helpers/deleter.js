const listings = require('../db/index.js').listings
let num = 21;

async function deleter({listingID},cb) {
    try{
         await listings.deleteOne({})
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

module.exports = deleter