const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createItinerary, getUserItineraries } = require('../controllers/itineraryController');

router.post('/', auth, createItinerary);
router.get('/', auth, getUserItineraries);

module.exports = router;
