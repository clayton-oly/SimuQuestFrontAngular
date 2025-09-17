import { Routes } from '@angular/router';
import { ResultadoComponent } from './pages/resultado/resultado.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'simulado/:id', component: QuizComponent },
  { path: 'resultado', component: ResultadoComponent }
];

