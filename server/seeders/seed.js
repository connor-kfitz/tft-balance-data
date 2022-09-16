const db = require('../config/connection');
const { Items, Synergies } = require('../models');

const itemsSeeds = require('./itemsSeeds.json');
const synergiesSeeds = require('./synergiesSeeds.json');

db.once('open', async () => {
  await Items.deleteMany({});
  await Synergies.deleteMany({});

  try {
    await Items.create(itemsSeeds);
    await Synergies.create(synergiesSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }

});
