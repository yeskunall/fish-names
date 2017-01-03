const fishNames = require('./index');
const expect = require('chai').expect;

const maleFish = require('./male-fish.json');
const femaleFish = require('./female-fish.json');

describe('fish-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(fishNames.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(arr) {
        return arr.every(function(item) {
          return typeof item === 'string';
        });
      }

    });
  });

  describe('random', function() {
    it('should return a random fish name from `fishNames.all`', function () {
      const randomFish = fishNames.random();
      expect(fishNames.all).to.include(randomFish);
    });

    it('should return an array of random fish names if passed a number as a param', function() {
      const randomFish = fishNames.random(3);
      expect(randomFish).to.have.length(3);
      randomFish.forEach(function(fish) {
        expect(fishNames.all).to.include(fish);
      });
    });
  });

  describe('allMaleFish', function() {
    it('should return a list of all male fish', function() {
      expect(fishNames.allMaleFish).to.not.include(fishNames.allFemaleFish);
    });
  });

  describe('allFemaleFish', function() {
    it('should return a list of all female fish', function() {
      expect(fishNames.allFemaleFish).to.not.include(fishNames.allMaleFish);
    });
  });
});
