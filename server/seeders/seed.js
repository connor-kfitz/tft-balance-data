const db = require('../config/connection');
const { Item, Synergy } = require('../models');

const itemSeeds = require('./itemSeeds.json');
const synergySeeds = require('./synergySeeds.json');

db.once('open', async () => {
  await Item.deleteMany({});
  await Synergy.deleteMany({});

  try {
    await Item.create(itemSeeds);
    await Synergy.create(synergySeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }

});
