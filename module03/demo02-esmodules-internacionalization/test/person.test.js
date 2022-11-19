import Person from "../src/person.js";
import chai from "chai";
import mocha from "mocha";

const { describe, it } = mocha;
const { expect } = chai;

describe("Person", () => {
  it("should return a person instance from a string", () => {
    const person = Person.generateInstaceFromString(
      "1 carro,ônibus 100 2010-10-10 2010-10-11"
    );

    const expected = {
      from: "2010-10-10",
      to: "2010-10-11",
      vehicles: ["carro", "ônibus"],
      kmTravelled: "100",
      id: "1",
    };

    expect(person).to.be.deep.equal(expected);
  });

  it("should format values", () => {
    const person = Person.generateInstaceFromString(
      "1 carro,ônibus 100 2010-10-10 2010-10-11"
    );

    const expected = {
      id: 1,
      vehicles: "carro and ônibus",
      kmTravelled: "100 km",
      from: "October 10, 2010",
      to: "October 11, 2010",
    };

    expect(person.formatted("en-US")).to.be.deep.equal(expected);
  });
});
