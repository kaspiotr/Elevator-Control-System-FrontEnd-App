import {Component, Input, OnInit} from '@angular/core';
import {SimulationStepDto} from '../model/simulation-step.dto';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {

  @Input() simulationStep: SimulationStepDto | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  asJson(): string {
    return JSON.stringify(this.simulationStep);
  }
}
