import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {SimulationStepDto} from '../model/simulation-step.dto';
import {StateUpdateRequestDto} from '../model/state-update-request.dto';
import {SimulationService} from '../services/simulation.service';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnChanges {

  @Output() stepChange: EventEmitter<SimulationStepDto> = new EventEmitter<SimulationStepDto>();
  @Input() simulationStep: SimulationStepDto | null = null;
  updateRequest: StateUpdateRequestDto = new StateUpdateRequestDto(1, 0, 1);
  elevators: any;
  stores: any;

  constructor(private simulationService: SimulationService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.simulationStep) {
      this.initSelectors();
    }
  }

  asJson(): string {
    return JSON.stringify(this.simulationStep);
  }

  addPassengerExplicitly(): void {
    this.simulationService.addPassengerExplicitly(this.updateRequest)
      .subscribe((simulationStep: SimulationStepDto) => {
        this.stepChange.emit(simulationStep);
      });
  }

  addPassengerImplicitly(): void {

  }

  private initSelectors(): void {
    console.log(this.simulationStep);
    this.elevators = this.simulationStep?.elevators;
    const storesNumber: number = this.simulationStep?.storesNo ? this.simulationStep?.storesNo : 0;
    this.stores = [...Array(storesNumber + 1).keys()];
  }
}
