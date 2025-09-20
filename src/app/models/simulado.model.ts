import { Question } from './question.model';

export interface SimulatedExam {
  id: number;
  nome: string;
  imagem: string;
  descricao?: string;
  dataCriacao: string;
  questions: Question[];
}