const express = require('express');
const router = express.Router();
const axios = require('axios');

// empty array to fill when the company id is obtained
let techSkills = [];
let tempStrengths = [];
let count = 0;

// function to handle the client requests choosing
// a company in a list of companies
handleCompanies = async e => {
  await axios
    .get(`http://localhost:5000/stack/${e}`)
    .then(response => {
      response.data.applicationData.forEach(item => {
        techSkills.push(item);
      });
      response.data.utilities.forEach(item => {
        techSkills.push(item);
      });
      response.data.devOps.forEach(item => {
        techSkills.push(item);
      });
      response.data.bussinessTools.forEach(item => {
        techSkills.push(item);
      });
    })
    .catch(err => console.log(err));
};

// function to handle the client requests by searching
// for names references
handleData = async e => {
  await axios
    .get(`https://bio.torre.co/api/people?q=${e}`)
    .then(response => {
      response.data.forEach(async items => {
        await axios.get(`https://bio.torre.co/api/bios/${items.publicId}`)
          .then(async response => {
            await response.data.strengths.forEach(async item => {
              tempStrengths.push(item.name)
            })
            await axios.post(`http://localhost:5000/data`, {
              username: response.data.person.publicId,
              name: response.data.person.name,
              strengths: tempStrengths
            })
            .then(response => {
              console.log(response.data)
            })
          })
      })
    })
    .catch(err => console.log(err));
};
// router post for take the inputs and compare de answer
router.post('/', async (req, res) => {
  // create a new stack for ranking comparison
  try {
    const companies = await handleCompanies(req.body._id);
    const userdata = await handleData(req.body.username);
    /* // taking only unique items in the array of features
    let unique = [...new Set(features)];
    unique.forEach(item => {
      if (item in techSkills) {
        count += 1;

        console.log(count)
      }
    });
    console.log(unique) */
    res.json('ok');
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;