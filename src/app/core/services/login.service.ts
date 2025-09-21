import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../../models/login';

@Injectable({ providedIn: 'root' })
export class LoginService {
  //private apiUrl = 'https://localhost:7140/api';
  private apiUrl = 'https://simuquestapi.onrender.com/api';
  
  constructor(private http: HttpClient) { }

  login(login: Login):Observable<Login> {
    return this.http.post<Login>(`${this.apiUrl}/Login`, login);
  }
}
