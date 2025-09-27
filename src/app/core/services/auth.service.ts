import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../../models/login';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://localhost:7140/api';
  //private apiUrl = 'https://simuquestapi.onrender.com/api';
  
  constructor(private http: HttpClient) { }

  register(login: Login): Observable<Login> {
    console.log(login, "vou tentar registrar")
    return this.http.post<Login>(`${this.apiUrl}/Login/register`, login);
  }

  login(login: Login):Observable<Login> {
    return this.http.post<Login>(`${this.apiUrl}/Login`, login);
  }

  // private loggedIn = new BehaviorSubject<boolean>(false);

  // get isLoggedIn$(): Observable<boolean> {
  //   return this.loggedIn.asObservable();
  // }

  // login() {
  //   // aqui você chamaria a API
  //   localStorage.setItem('token', 'abc123');
  //   this.loggedIn.next(true);
  // }

  // logout() {
  //   localStorage.removeItem('token');
  //   this.loggedIn.next(false);
  // }

  // checkLogin() {
  //   this.loggedIn.next(!!localStorage.getItem('token'));
  // }
}
