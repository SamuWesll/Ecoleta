import firebase from './firebase';
import { Usuario } from '../model/UsuarioModel';

class UsuarioFirebase {

    insert(usuario: Usuario) {
        return firebase.firestore().collection('tb_usuario').doc(usuario.uid).set(usuario);
    }

}

export default UsuarioFirebase;