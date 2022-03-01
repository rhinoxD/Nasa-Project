const mongoose = require('mongoose');

const planetsSchema = new mongoose.Schema({
  keplerName: {
    type: String,
    required: true,
  },
});

// Connect planetsSchema with "planets" collection
module.exports = mongoose.model('Planet', planetsSchema);
