const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  destinations: [String],
  startDate: Date,
  endDate: Date,
  activities: [{ day: String, activity: String }],
  notes: String,
  photos: [String],
  collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Itinerary', itinerarySchema);
