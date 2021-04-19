import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {SimulationInputDto} from '../model/simulation-input.dto';
import {Observable} from 'rxjs';
import {SimulationStepDto} from '../model/simulation-step.dto';

@Injectable()
export class SimulationService {

  private simulationUrl = 'http://localhost:8081/simulation';

  constructor(private http: HttpClient) {
  }

  startSimulation(model: SimulationInputDto): Observable<SimulationStepDto> {
    const params = new HttpParams()
      .set('storesNo', String(model.floresNumber))
      .set('elevatorsNo', String(model.elevatorsNumber));
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.get(this.simulationUrl, {params, headers});
  }
}
