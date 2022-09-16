const { Schema, model } = require('mongoose');

const synergiesSchema = new Schema({
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

const Synergies = model('Synergies', synergiesSchema);

module.exports = Synergies;