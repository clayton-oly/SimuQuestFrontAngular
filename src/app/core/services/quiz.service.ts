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

  getQuestionsByExamId(id: number):Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/SimulatedExam/${id}/questoes-aleatorias?quantidade=65`);
  }

}