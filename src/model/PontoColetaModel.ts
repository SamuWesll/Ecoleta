import { LocalidadeModel } from "./LocalidadeModel";

export interface PontoColeta {
    id: string,
    nome: string,
    tipoEstabelecimento: string,
    localidade: LocalidadeModel,
}