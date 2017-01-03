const fishNames = require('./index');
const expect = require('chai').expect;

const maleFish = require('./male-fish.json');
const femaleFish = require('./female-fish.json');

describe('fish-names', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      expect(fishNames.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(arr) {
        return arr.every((item) => {
          return typeof item === 'string';
        });
      }

    });
  });

  describe('random', () => {
    it('should return a random fish name from `fishNames.all`', () => {
      const randomFish = fishNames.random();
      expect(fishNames.all).to.include(randomFish);
    });
  });

  describe('allMaleFish', () => {
    it('should return a list of all male fish', () => {
      expect(fishNames.allMaleFish).to.not.include(fishNames.allFemaleFish);
    });
  });

  describe('allFemaleFish', () => {
    it('should return a list of all female fish', () => {
      expect(fishNames.allFemaleFish).to.not.include(fishNames.allMaleFish);
    });
  });
});