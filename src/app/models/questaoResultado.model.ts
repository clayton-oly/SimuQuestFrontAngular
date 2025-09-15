import { OpcaoResultado } from "./opcaoResultado.model";

export interface QuestaoResultado {
    pergunta: string;
    explicacao: string;
    options: OpcaoResultado[];
}