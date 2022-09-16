const { Schema, model } = require('mongoose');

const itemsSchema = new Schema({
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

const Items = model('Items', itemsSchema);

module.exports = Items;
