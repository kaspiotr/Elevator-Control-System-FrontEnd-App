import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {SimulationInputDto} from '../model/simulation-input.dto';
import {Observable} from 'rxjs';
import {SimulationStepDto} from '../model/simulation-step.dto';
import {StateUpdateRequestDto} from '../model/state-update-request.dto';
import {ElevatorDto} from '../model/elevator.dto';

const BASE_URL = 'http://localhost:8081';

@Injectable()
export class SimulationService {
  constructor(private http: HttpClient) {
  }

  private static getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('Content-Type', 'application/json');
  }

  startSimulation(model: SimulationInputDto): Observable<SimulationStepDto> {
    const params = new HttpParams()
      .set('storesNo', String(model.floresNumber))
      .set('elevatorsNo', String(model.elevatorsNumber));
    const headers = SimulationService.getHeaders();
    return this.http.get<SimulationStepDto>(BASE_URL + '/simulation', {params, headers});
  }

  addPassengerExplicitly(updateRequest: StateUpdateRequestDto): Observable<SimulationStepDto> {
    const params = new HttpParams()
      .set('elevatorId', updateRequest.elevatorId)
      .set('currentStoreNo', updateRequest.currentStoreNo)
      .set('targetStoreNo', updateRequest.targetStoreNo);
    const headers = SimulationService.getHeaders();
    return this.http.get<SimulationStepDto>(BASE_URL + '/update', {params, headers});
  }

  performNextSimulationStep(): Observable<SimulationStepDto> {
    const headers = SimulationService.getHeaders();
    return this.http.get<SimulationStepDto>(BASE_URL + '/step', {headers});
  }

  getSimulationStatus(): Observable<ElevatorDto[]> {
    const headers = SimulationService.getHeaders();
    return this.http.get<ElevatorDto[]>(BASE_URL + '/status', {headers});
  }
}
