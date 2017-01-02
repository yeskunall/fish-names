const maleFish = require('./male-fish.json');
const femaleFish = require('./female-fish.json');
const uniqueRandomArray = require('unique-random-array');

const allFish = maleFish.concat(femaleFish);

module.exports = {
  all: allFish,
  random: uniqueRandomArray(allFish)
};
