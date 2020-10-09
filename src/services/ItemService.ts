import firebase from './firebase';
import { ItemModel } from '../model/ItemModel';

class ItemService {

    create(item: ItemModel) {
        return firebase.firestore().collection('tb_item').add(item);
    }

    findByAll() {
        return firebase.firestore().collection('tb_item').get();
    }

}

export default ItemService;