const Itinerary = require('../models/Itinerary');

exports.createItinerary = async (req, res) => {
  try {
    const newItinerary = await Itinerary.create({ ...req.body, userId: req.user.id });
    res.status(201).json(newItinerary);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find({ userId: req.user.id });
    res.json(itineraries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
