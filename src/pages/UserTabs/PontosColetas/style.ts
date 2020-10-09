import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
    },
    header: {
        // backgroundColor: 'gray',
        width: '100%',
        padding: 20,
    },
    headerImg: {
        alignItems: 'center'
    },
    listaItem: {
        marginTop: 20,
    },
    listaItemScroll: {
        flexDirection: 'row',
    },
    buttoItem: {
        marginHorizontal: 10,
        marginVertical: 15,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#03bb85',
        alignItems: 'center',
    },
    selectedButtoItem: {
        backgroundColor: '#3e836b'
    },
    buttoItemText: {
        color: '#ffff',
        marginTop: 10,
    },
    divider: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    viewMap: {
        flex: 1,
        width: '90%',
        marginLeft: 20,
    },
    mapMarker: {
        width: '100%',
        height: 400,
    }
})

export default style;