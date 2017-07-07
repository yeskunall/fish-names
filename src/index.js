const maleFish = require('./male-fish.json');
const femaleFish = require('./female-fish.json');
const uniqueRandomArray = require('unique-random-array');

const allFish = maleFish.concat(femaleFish);
const getRandomFish = uniqueRandomArray(allFish);
const randomMaleFish = uniqueRandomArray(maleFish);
const randomFemaleFish = uniqueRandomArray(femaleFish);

const random = function(n) {
  if (n === undefined) return getRandomFish();
  const randomFish = [];
  for (var i = 0; i < n; i++) {
    randomFish.push(getRandomFish());
  }
  return randomFish;
};

const getMaleFish = function(n){
  if(n === undefined) return randomMaleFish();

  const maleFish = [];
  for(var i=0; i<n; i++){
    maleFish.push(randomMaleFish());
  }
  return maleFish;
}

const getFemaleFish = function(n){
  if(n === undefined) return randomFemaleFish();

  const femaleFish = [];
  for(var i=0; i<n; i++){
    femaleFish.push(randomFemaleFish());
  }
  return femaleFish;
}

module.exports = {
  all: allFish,
  allMaleFish: maleFish,
  allFemaleFish: femaleFish,
  random: random,
  getMaleFish: getMaleFish,
  getFemaleFish: getFemaleFish
};
