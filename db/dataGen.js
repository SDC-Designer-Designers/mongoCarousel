const { Parser } = require('json2csv');
const fields = ['listingID', 'images', 'rooms', 'occupancy', 'reviews', 'price', 'similar']

for(var i = 1e7; i > 0; i--){
  const randomNum = max => {
    return Math.floor(Math.random() * max);
  };
    let room = randomNum(5) + 1;
    var myobj = { 
        'listingID': randomNum(10000),
        'images': [`https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}`,`https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}`,`https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}`,`https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}`,`https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}`,`https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}`,`https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}`,`https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}`,`https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}`,`https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}`], 
        'rooms': room,
        'occupancy': room * 2, 
        'reviews': randomNum(200), 
        'price': randomNum(600), 
        'similar': [randomNum(1000),randomNum(1000),randomNum(1000),randomNum(1000),randomNum(1000)] 
      };
    const json2csvParser = new Parser ({fields})
    const csv  = json2csvParser.parse(myobj)
    console.log(csv.slice(68))
}




































