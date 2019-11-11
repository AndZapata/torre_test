const express = require('express');
const router = express.Router();
const axios = require('axios');

// empty array to fill when the company id is obtained
let techSkills = [];
let username = [];
let features = [];
let count = 0;

// function to handle the client requests choosing
// a company in a list of companies
handleCompanies = async (e) => {
  await axios.get(`http://localhost:5000/stack/${e}`)
    .then(response => {
      response.data.applicationData.forEach(item => {
        techSkills.push(item)
      })
      response.data.utilities.forEach(item => {
        techSkills.push(item)
      })
      response.data.devOps.forEach(item => {
        techSkills.push(item)
      })
      response.data.bussinessTools.forEach(item => {
        techSkills.push(item)
      })
    })
    .catch(err => console.log(err));
}

// function to handle the client requests by searching
// for names references
handleData = async (e) => {
  await axios.get(`https://bio.torre.co/api/people?q=${e}`)
    .then(response => {
      response.data.forEach(people => {
        username.push(people.publicId);
      })
      username.forEach(async publicId => {
        await axios.get(`https://bio.torre.co/api/bios/${publicId}`)
          .then(response => {
            response.data.strengths.forEach(item => {
              features.push(item.name);
            });
          })
          .catch(err => console.log(err))
      })
    })
    .catch(err => console.log(err));
}
// router post for take the inputs and compare de answer
router.post('/', async (req, res) => {
  // create a new stack for ranking comparison
  try {
    const companies = await handleCompanies(req.body._id);
    const userdata = await handleData(req.body.username);
    console.log(features)
    features.forEach(item => {
      console.log(item)
      if (item in techSkills) {
        count += 1
      }
    })
    console.log(count)
    res.send('ok')
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
