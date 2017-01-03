const fishNames = require('./index');
const expect = require('chai').expect;

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
});
