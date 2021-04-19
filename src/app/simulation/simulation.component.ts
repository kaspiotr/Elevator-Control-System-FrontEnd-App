import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {SimulationStepDto} from '../model/simulation-step.dto';
import {StateUpdateRequestDto} from '../model/state-update-request.dto';
import {SimulationService} from '../services/simulation.service';
import {ElevatorDto} from '../model/elevator.dto';
import {StatePickupRequestDto} from '../model/state-pickup-request.dto';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnChanges {

  @Output() stepChange: EventEmitter<SimulationStepDto> = new EventEmitter<SimulationStepDto>();
  @Input() simulationStep: SimulationStepDto | null = null;
  updateRequest: StateUpdateRequestDto = new StateUpdateRequestDto(1, 0, 1);
  pickupRequest: StatePickupRequestDto = new StatePickupRequestDto(1, 1, 1);
  elevators: any;
  stores: any;
  elevatorStatuses: ElevatorDto[] = [];
  directions: number[] = [-1 , 1];

  constructor(private simulationService: SimulationService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.simulationStep) {
      this.initSelectors();
    }
  }

  asJson(object: any): string {
    return JSON.stringify(object);
  }

  addPassengerExplicitly(): void {
    this.simulationService.addPassengerExplicitly(this.updateRequest)
      .subscribe((simulationStep: SimulationStepDto) => {
        this.stepChange.emit(simulationStep);
      });
  }

  addPassengerImplicitly(): void {
    this.simulationService.addPassengerImplicitly(this.pickupRequest)
      .subscribe((simulationStep: SimulationStepDto) => {
        this.stepChange.emit(simulationStep);
      });
  }

  private initSelectors(): void {
    console.log(this.simulationStep);
    this.elevators = this.simulationStep?.elevators;
    const storesNumber: number = this.simulationStep?.storesNo ? this.simulationStep?.storesNo : 0;
    this.stores = [...Array(storesNumber + 1).keys()];
  }

  performSimulationNextStep(): void {
    this.simulationService.performNextSimulationStep()
      .subscribe((simulationStep: SimulationStepDto) => {
        this.stepChange.emit(simulationStep);
      });
  }

  getSimulationStatus(): void {
    this.simulationService.getSimulationStatus()
      .subscribe((elevators: ElevatorDto[]) => {
        this.elevatorStatuses = elevators;
      });
  }
}
