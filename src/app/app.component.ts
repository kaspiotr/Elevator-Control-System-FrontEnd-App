import {Component} from '@angular/core';
import {SimulationInputDto} from './model/simulation-input.dto';
import {SimulationService} from './services/simulation.service';
import {SimulationStepDto} from './model/simulation-step.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elevatorcontrolsystemfrondend';
  flores = [...Array(11).keys()];
  elevators = [...Array(16).keys()].map(x => x + 1);
  model: SimulationInputDto = new SimulationInputDto(4, 1);
  simulationStep: SimulationStepDto | null = null;

  constructor(private simulationService: SimulationService) {
  }

  startSimulation(): void {
    this.simulationService.startSimulation(this.model).subscribe((data: SimulationStepDto) => {
      this.simulationStep = data;
    });
  }
}
