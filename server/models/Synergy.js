const { Schema, model } = require('mongoose');

const synergySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  nerfCount: [
    {
      type: Number,
    },
  ],
  neutralCount: [
    {
      type: Number,
    },
  ],
  buffCount: [
    {
      type: Number,
    },
  ],
});

const Synergy = model('Synergy', synergySchema);

module.exports = Synergy;