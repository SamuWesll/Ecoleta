import { LocalidadeModel } from "./LocalidadeModel";

export interface PontoColeta {
    id?: string,
    nome: string,
    tipoEstabelecimento: tipoEstabelecimentoEnum,
    localidade: LocalidadeModel,
    urlImagem: string,
    listaItem: Array<String>,
}

export enum tipoEstabelecimentoEnum {
    SUPERMECADO = 'supermecado',
    LOJA = 'loja',
    RESTAURANTE = 'restaurante',
    POSTO_SAUDE = 'posto de saúde',
    OUTROS = 'outros',
}