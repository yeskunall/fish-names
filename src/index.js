const maleFish = require('./male-fish.json');
const femaleFish = require('./female-fish.json');
const uniqueRandomArray = require('unique-random-array');

const allFish = maleFish.concat(femaleFish);
const getRandomFish = uniqueRandomArray(allFish);

const random = function(n) {
  if (n === undefined) return getRandomFish();
  const randomFish = [];
  for (var i = 0; i < n; i++) {
    randomFish.push(getRandomFish());
  }
  return randomFish;
};

module.exports = {
  all: allFish,
  allMaleFish: maleFish,
  allFemaleFish: femaleFish,
  random: random
};
