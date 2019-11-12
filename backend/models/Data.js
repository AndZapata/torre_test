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
    type: String
  }]
});

module.exports = mongoose.model('Data', dataSchema)