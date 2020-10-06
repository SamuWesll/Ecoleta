import { LocalidadeModel } from "./LocalidadeModel";

export interface Cliente {
    id?: string,
    nomeCompleto?: string,
    dataNascimento?: string,
    email?: string,
    uid?: string,
    localidade: LocalidadeModel,
}