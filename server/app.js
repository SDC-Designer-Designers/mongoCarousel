const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3002;
const cors = require('cors');
const listings = require('../db/index.js').listings;
const router = require('./router.js')

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../dist'));

app.use('/',router)

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
