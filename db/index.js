const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carousel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('successfully connected to the database...');
});

const listingSchema = new mongoose.Schema({
  listingID: Number,
  images: [String],
  rooms: Number,
  occupancy: Number,
  reviews: Number,
  ratings: Number,
  location: String,
  price: Number,
  similar: [String]
});

module.exports.listings = mongoose.model('listings', listingSchema);