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
      }
    }
};

module.exports = resolvers;
