const { Item, Synergy } = require('../models');

const resolvers = {
    Query: {
        items: async () => {
          return Item.find();
        },
        synergies: async () => {
          return Synergy.find();
        }
      },

    Mutation: {
      addNerfItem: async(parent, { itemId }) => {
        return Item.findOneAndUpdate(
          { id: itemId },
          { $inc: { nerfCount: 1 } },
          { new: true }          
        )
      },

      addNeutralItem: async(parent, { itemId }) => {
        return Item.findOneAndUpdate(
          { id: itemId },
          { $inc: { neutralCount: 1 } },
          { new: true }          
        )
    },
      addBuffItem: async(parent, { itemId }) => {
        return Item.findOneAndUpdate(
          { id: itemId },
          { $inc: { buffCount: 1 } },
          { new: true }          
        )
    },
  }
};

module.exports = resolvers;