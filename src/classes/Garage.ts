import Car from "./Car";

class Garage {
  parkedCars: Array<Car> = [];

  park(car: Car): void {
    this.parkedCars.push(car);
  }

  repair(immatriculation: string): void {
    const index: number = this.parkedCars.findIndex(
      (car) => car.immatriculation === immatriculation
    );

    this.parkedCars.splice(index, 1); //remove the car to the parkedCars list
  }
}

export default Garage;
