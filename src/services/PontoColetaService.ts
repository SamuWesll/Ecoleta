import firebase from './firebase';
import { PontoColeta } from '../model/PontoColetaModel';

class PontoColetaService {

    create(ponto: PontoColeta) {
        return firebase.firestore().collection('tb_coleta').add(ponto);
    }

    findByAll() {
        return firebase.firestore().collection('tb_coleta').get()
    }

}

export default PontoColetaService;