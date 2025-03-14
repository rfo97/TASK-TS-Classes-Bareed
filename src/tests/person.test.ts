/**************************
 *
 * THIS IS A TESTING FILE
 *
 * DO NOT MODIFY THIS FILE
 *
 ***************************/

import { Person, Point, Wallet } from "../bareed";

let person: Person;

beforeEach(() => {
  person = new Person("Asis", 4, 3);
});

describe("Person", () => {
  describe("new Person('Asis', 4, 3)", () => {
    it("creates a person instance named 'Asis'", () => {
      expect(person.name).toBe("Asis");
    });

    describe("has a location", () => {
      it("which is a point instance", () => {
        expect(person.location instanceof Point).toBe(true);
      });

      it("with coordinates (4,3)", () => {
        let expected = new Point(4, 3);
        expect(person.location.equals(expected)).toBe(true);
      });
    });

    describe("has a wallet", () => {
      it("which is a Wallet instance", () => {
        expect(person.wallet instanceof Wallet).toBe(true);
      });

      it("with no money", () => {
        expect(person.wallet.money).toBe(0);
      });
    });

    it("has a moveTo(newPoint) method changes the person's location to newPoint", () => {
      let newPoint = new Point(12, 13);
      person.moveTo(newPoint);
      let newLocation = person.location;
      expect(newLocation).toEqual(newPoint);
    });
  });
});
