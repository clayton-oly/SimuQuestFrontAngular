import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../../models/question.model';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private apiUrl = 'https://localhost:7140/api'; // sua API

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/Question`);
  }

  getSimuladoById(id: number) {
    return this.http.get(`https://localhost:7140/api/SimulatedExam/${id}`);
  }
}