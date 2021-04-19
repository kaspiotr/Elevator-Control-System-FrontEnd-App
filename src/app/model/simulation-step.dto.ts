import {ElevatorDto} from './elevator.dto';

export class SimulationStepDto {
  storesNo: number;
  elevators: ElevatorDto[];
  constructor(storesNo: number, elevators: ElevatorDto[]) {
    this.storesNo = storesNo;
    this.elevators = elevators;
  }
}
