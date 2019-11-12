const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const port = process.env.PORT || 5000;
const app = express();

// midlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// route to handle stack for rankings
const userData = require('./routes/data');
app.use('/data', userData);

// route to handle stack for rankings
const stackData = require('./routes/stack');
app.use('/stack', stackData);

// route to handle data
const comparisonData = require('./routes/comparison');
app.use('/comparison', comparisonData);

// Route status
app.get('/', (req, res) => {
  res.send({ status: 'ok' });
});

// server listen on port
app.listen(port, () => {
  console.log('app listening on port:', port, '!');
});
// connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.once('open', function () {
  console.log('Connected to database');
});
