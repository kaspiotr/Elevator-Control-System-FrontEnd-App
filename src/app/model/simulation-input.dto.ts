export class SimulationInputDto {
  floresNumber: number;
  elevatorsNumber: number;
  constructor(floresNumber: number, elevatorsNumber: number) {
    this.floresNumber = floresNumber;
    this.elevatorsNumber = elevatorsNumber;
  }
}
