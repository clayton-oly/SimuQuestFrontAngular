import { Question } from './question.model';

export interface SimulatedExam {
  id: number;
  nome: string;
  descricao?: string;
  dataCriacao: string;
  questions: Question[];
}