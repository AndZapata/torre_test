const mongoose = require('mongoose');

const rankingSchema = mongoose.Schema({
  techCompany: {
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
  applicationData: [{
    type: String,
    require: true
  }],
  utilities: [{
    type: String,
    require: true
  }],
  devOps: [{
    type: String,
    require: true
  }],
  bussinessTools: [{
    type: String,
    require: true
  }]
});

module.exports = mongoose.model('ranking', rankingSchema)