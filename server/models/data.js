const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  year: Number,
  country: String,
  topics: [String],
  region: String,
  city: String,
  endYear: Number,
  sector: String,
  PEST: String,
  source: String,
  SWOT: String,
});

module.exports = mongoose.model('Data', dataSchema);
