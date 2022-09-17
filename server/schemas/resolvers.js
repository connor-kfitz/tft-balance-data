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
};

module.exports = resolvers;
