import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultadoComponent } from './resultado/resultado.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'simulado/:id', component: QuizComponent },
    { path: 'resultado', component: ResultadoComponent } // <-- essa linha
];

