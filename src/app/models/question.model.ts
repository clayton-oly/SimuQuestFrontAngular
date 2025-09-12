import { Optiona } from "./option.model";

export interface Question {
  id: number;
  texto: string;
  options: Optiona[];
}