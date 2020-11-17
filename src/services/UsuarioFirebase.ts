import firebase from './firebase';
import { Usuario } from '../model/UsuarioModel';
import { Alert } from 'react-native';

class UsuarioFirebase {

    insert(usuario: Usuario) {
        return firebase.firestore().collection('tb_usuario').doc(usuario.uid).set(usuario);
    }

    consultar(uid: string) {
        return firebase.firestore().collection('tb_usuario').doc(uid)
    }

}

export default UsuarioFirebase;