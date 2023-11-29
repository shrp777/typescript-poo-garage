import { describe, expect, test } from "@jest/globals";
import Car from "../src/classes/Car";
import Garage from "../src/classes/Garage";

let crashTest: Car;
let garage: Garage;

beforeEach(() => {
  garage = new Garage();
  crashTest = new Car("abcdef");
});

describe("Garage", () => {
  test("Garage is defined", () => {
    expect(Garage).toBeDefined();
  });
  test("Car is defined", () => {
    expect(Car).toBeDefined();
  });
  test("garage parkedCars should be empty by default", () => {
    expect(garage.parkedCars.length).toEqual(0);
  });
  test("park method should add a car to parkedCars", () => {
    const carNumber: number = garage.parkedCars.length; //0
    garage.park(crashTest); //add a car to the parkedCars

    expect(garage.parkedCars.length).toEqual(carNumber + 1);
  });

  test("park method should add a car to parkedCars when there is already a car", () => {
    garage.park(crashTest); //add a car to the parkedCars
    garage.park(new Car("kljsdklfjskl")); //add a car to the parkedCars

    expect(garage.parkedCars.length).toEqual(2);
  });

  test("park repair should update parkedCars length", () => {
    garage.park(crashTest); //add a car to the parkedCars

    garage.park(new Car("kljsdklfjskl")); //add a car to the parkedCars

    garage.repair(crashTest.immatriculation);

    expect(garage.parkedCars.length).toEqual(1);
  });

  test("park repair should remove the car repaired", () => {
    garage.park(crashTest); //add a car to the parkedCars

    garage.park(new Car("kljsdklfjskl")); //add a car to the parkedCars

    const immatriculation: string = "kljsdklfjskl".toUpperCase();

    garage.repair(crashTest.immatriculation);

    expect(garage.parkedCars[0].immatriculation).toEqual(immatriculation);
  });
});
