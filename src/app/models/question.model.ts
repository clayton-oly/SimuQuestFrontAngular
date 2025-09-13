import { Option } from "./option.model";

export interface Question {
  id: number;
  texto: string;
  explicacao: string;
  options: Option[];
}