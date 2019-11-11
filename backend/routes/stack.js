const express = require('express');
const Stack = require('../models/Stack');
const router = express.Router();

router.get('/', async (req, res) => {
  // get all tech companies from database
  try {
    const stack = await Stack.find();
    res.json(stack);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/:stackId', async (req, res) => {
  // Get company by stack id
  try {
    const stack = await Stack.findById(req.params.stackId);
    res.json(stack);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  // create a new stack for ranking comparison
  try {
    const stack = new Stack(req.body);
    const savedStack = await stack.save();
    res.json(savedStack);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/:stackId', async (req, res) => {
  // Delete company by stack id
  try {
    const removedStack = await Stack.deleteOne({
      _id: req.params.stackId
    });
    res.json(removedStack);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch('/:stackId', async (req, res) => {
  // Update company by stackId
  try {
    const updatedStack = await Stack.findByIdAndUpdate(
      { _id: req.params.stackId },
      {
        $push: {
          applicationData: req.body.applicationData,
          utilities: req.body.utilities,
          devOps: req.body.devOps,
          bussinessTools: req.body.bussinessTools
        }
      }
    );
    res.json(updatedStack);
  } catch (err) {
    res.json({ message: err });
  }
});


module.exports = router;
