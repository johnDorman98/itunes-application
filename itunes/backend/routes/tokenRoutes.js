const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Route to get a JWT token
router.get('/', (req, res) => {
  // Create a JWT token
  const token = jwt.sign({ app: 'iTunesSearchApp' }, process.env.JWT_SECRET, { expiresIn: '3h' });

  // Send the token as a response
  res.json({ token });
});

module.exports = router;
