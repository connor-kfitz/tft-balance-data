const { Item, Synergy } = require('../models');

const resolvers = {
    Query: {
        items: async () => {
          return Item.find();
        },

        // item: async(parent, { itemId }) => {
        //   return Item.findOne({ _id: itemId });
        // },

        // synergies: async () => {
        //   return Synergy.find();
        // },

        // synergy: async(parent, { synergyId }) => {
        //   return Synergy.findOne({ _id: synergyId });
        // }
      },
};

module.exports = resolvers;
