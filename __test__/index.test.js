/* global describe, test, expect, it */

const fishNames = require("../src/index");

const allFish = fishNames.all;

describe("fish names", function() {
  describe("all", function() {
    it("should return an object containing all 200 fish names", function() {
      expect(Object.keys(allFish).length).toEqual(200);
    });
  });

  describe("random", function() {
    it("should return a random fish", function() {
      expect(Object.keys(allFish).map(fish => allFish[fish])).toContain(
        fishNames.random(),
      );
    });

    it("should return an array of random fish names if passed a number as a param", function() {
      const threeRandomFish = fishNames.random(3);
      expect(threeRandomFish.length).toBe(3);
    });
  });
});
