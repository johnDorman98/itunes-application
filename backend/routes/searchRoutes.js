const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');
const authenticateJWT = require('../middleware/authenticateJWT');

// Route to search for a user at api/search
router.get('/', authenticateJWT, searchController);

module.exports = router;