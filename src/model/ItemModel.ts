import { TipoUnidade } from "./TipoUnidadeUnum";

export interface ItemModel {
    id?: string,
    nome: string,
    tipoUnidade: TipoUnidade,
    pontoPorUnidade: number,
    urlIcone?: string,
}