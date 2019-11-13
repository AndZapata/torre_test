const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    require: true
  },
  strengths: [{
    type: String,
    require: true
  }],
  picture: {
    type: String,
    default: 'https://i.pinimg.com/originals/78/54/84/7854843699c1893928012a442386a129.jpg'
  }
});

module.exports = mongoose.model('Data', dataSchema)