import { TipoUnidade } from "./TipoUnidadeUnum";

export interface ItemModel {
    id: string,
    nome: string,
    icone: string,
    tipoUnidade: TipoUnidade,
    pontoPorUnidade: number,
}