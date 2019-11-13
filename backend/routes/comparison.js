const express = require('express');
const router = express.Router();
const axios = require('axios');

// router post for take the inputs and compare de answer
router.post('/', async (req, res) => {

  let url = `https://bio.torre.co/api/people?q=${req.body.username}`
  // create a new stack for ranking comparison
  try {
    await axios.get(url)
      .then(response => {
        res.json(response.data)
      })
      .catch(err => console.log(err));
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/:publicId', async (req, res) => {
  try {
    await axios.get(`https://bio.torre.co/api/bios/${req.body.userId}`)
      .then(async response => {
        let tempStrengths = [];
        await response.data.strengths.forEach(async item => {
          tempStrengths.push(item.name)
        })
        res.json(tempStrengths)
      })
      .catch(err => console.log(err));
  } catch (err) {
    res.json({ message: err });
  }
})

module.exports = router;