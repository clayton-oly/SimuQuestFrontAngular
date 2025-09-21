import { Routes } from '@angular/router';
import { ResultadoComponent } from './pages/resultado/resultado.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'simulado/:id', component: QuizComponent },
  { path: 'resultado', component: ResultadoComponent }
];

