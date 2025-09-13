import { Option } from "./option.model";

export interface QuestaoResultado {
  pergunta: string;
  options: Option[];
  explicacao: string;
}