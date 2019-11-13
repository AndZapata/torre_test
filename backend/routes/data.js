const express = require('express');
const Data = require('../models/Data');
const router = express.Router();

router.get('/', async (req, res) => {
  // get all tech companies from database
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/:dataId', async (req, res) => {
  // Get company by stack id
  try {
    const data = await Data.findById(req.params.dataId);
    await res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  // create a new stack for ranking comparison
  try {
    const data = new Data(req.body);
    const savedData = await data.save();
    await res.json(savedData);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/:dataId', async (req, res) => {
  // Delete company by stack id
  try {
    const removedData = await Data.deleteOne({
      _id: req.params.dataId
    });
    res.json(removedData);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch('/:dataId', async (req, res) => {
  // Update company by stackId
  try {
    const updatedData = await Data.findByIdAndUpdate(
      { _id: req.params.dataId },
      {
        $push: {
          username: req.body.username,
          name: req.body.name,
          strengths: req.body.strengths
        }
      }
    );
    res.json(updatedData);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
