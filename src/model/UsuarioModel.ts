import { LocalidadeModel } from "./LocalidadeModel";

export interface Usuario {
    id?: string,
    nomeCompleto?: string,
    dataNascimento?: string,
    email?: string,
    uid?: string,
    localidade: LocalidadeModel,
}