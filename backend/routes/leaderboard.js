const express = require('express');
const router = express.Router();
const User = require('../models/User');

// @route   GET api/leaderboard
// @desc    Get top users by points
// @access  Public
router.get('/', async (req, res) => {
  try {
    const users = await User.find().sort({ points: -1 }).limit(10).select('name points');
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
