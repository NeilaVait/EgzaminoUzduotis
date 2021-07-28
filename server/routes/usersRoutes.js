const express = require('express');
const User = require('../model/userModel');
const router = express.Router();

// add new user
router.post('/api/users/new', async (req, res) => {
  const newUserData = req.body;
  console.log(newUserData);
  const newUser = new User(req.body);

  try {
    const newUserResult = await newUser.save();
    res.json(newUserResult);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
