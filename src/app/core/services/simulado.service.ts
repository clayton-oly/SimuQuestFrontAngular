import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Simulado } from '../../models/simulado.model';

@Injectable({ providedIn: 'root' })
export class SimuladoService {
  private apiUrl = 'https://localhost:7140/api'; // sua API

  constructor(private http: HttpClient) { }

  getSimulado(): Observable<Simulado[]> {
    return this.http.get<Simulado[]>(`${this.apiUrl}/SimulatedExam`);
  }

  getSimuladoById(id: number) {
    return this.http.get(`https://localhost:7140/api/SimulatedExam/${id}`);
  }
}
