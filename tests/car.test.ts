import { describe, expect, test } from "@jest/globals";
import Car from "../src/classes/Car";

let crashTest: Car;

beforeEach(() => {
  crashTest = new Car("abcdef");
});

describe("Car", () => {
  test("car.immatriculation should return immatriculation", () => {
    expect(crashTest.immatriculation).toEqual("ABCDEF");
  });
  test("car.immatriculation should return immatriculation in upper case", () => {
    expect(crashTest.immatriculation).toEqual("ABCDEF");
  });
});
