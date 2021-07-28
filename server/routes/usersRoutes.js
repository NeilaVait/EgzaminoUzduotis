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
    res.status(500).json(err);
  }
});

// get all users
router.get('/api/users', async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete user
router.delete('/api/users/delete/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// upd user
router.put('/api/users/update/:userId', async (req, res) => {
  const userId = req.params.userId;
  const updData = req.body.updData;

  try {
    const user = await User.findByIdAndUpdate(userId, updData);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
