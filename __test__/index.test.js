/* global describe, expect, it */

const fishNames = require('../src/index');

const allFish = fishNames.all;

describe('fish names', function() {
  describe('all', function() {
    it('should return an object containing all 200 fish names', function() {
      expect(Object.keys(allFish).length).toEqual(200);
    });
  });

  describe('random', function() {
    it('should return a random fish', function() {
      expect(Object.keys(allFish).map(fish => allFish[fish])).toContain(
        fishNames.random()
      );
    });

    it('should return an array of random fish names if passed a number as a param', function() {
      const threeRandomFish = fishNames.random(3);
      expect(threeRandomFish.length).toBe(3);
    });
  });

  describe('male/female fish', function() {
    const allMaleFish = Object.keys(fishNames.allMaleFish).map(
      fish => fishNames.allMaleFish[fish]
    );
    const allFemaleFish = Object.keys(fishNames.allFemaleFish).map(
      fish => fishNames.allFemaleFish[fish]
    );
    it('should ONLY contain names of male fish', function() {
      expect(allMaleFish).not.toEqual(expect.arrayContaining(allFemaleFish));
    });

    it('should ONLY contain names of female fish', function() {
      expect(allFemaleFish).not.toEqual(expect.arrayContaining(allMaleFish));
    });
  });
});
