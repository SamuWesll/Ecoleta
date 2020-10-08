import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 32,
        paddingHorizontal: 14,
        height: '100%'
    },
    header: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: 'Aleo_700Bold',
    },
    main: {
        // alignItems: 'center',
        height: '100%',
    },
    inputTitle: {
        fontSize: 14,
        marginTop: 10,
        marginLeft: 25,
        fontFamily: 'Aleo_400Regular_Italic',
    },
    viewInput: {
        flexDirection: 'row-reverse',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    iconInput: {
        marginLeft: -70,
    },
    input: {
        height: 45,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        // backgroundColor: 'white',
    },
    viewMap: {
        flex: 1,
        width: '90%',
        borderRadius: 10,
        overflow: 'hidden',
        // marginTop: 16,
        borderColor: 'gray',
        borderWidth: 1,
        marginLeft: 20,
    },
    mapMarker: {
        width: '100%',
        height: 220,
    },
    footer: {
        width: '100%',
        height: 100,
        marginBottom: 50,
        alignItems: 'center',
        marginTop: 50,
    },
    buttonCadastrar: {
        backgroundColor: 'green',
        borderRadius: 8,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        // justifyContent: 'space-evenly',
        width: '80%'
    },
    buttonCadastrarText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        width: '90%',
        textAlign: 'center',
    },
    modalContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
        backgroundColor: 'white',
        marginHorizontal: 25,
        borderRadius: 8,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        width: '100%',
        paddingHorizontal: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontFamily: 'Aleo_700Bold',
    },
    modalBody: {
        marginVertical: 15,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    modalText: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 17,
    },
    modalFooter: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginVertical: 20,
    },
    buttoModalFooterButtonSim: {
        flexDirection: 'row',
        backgroundColor: 'green',
        paddingVertical: 5,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '25%',
    },
    buttoModalFooterButtonNao: {
        flexDirection: 'row',
        backgroundColor: 'red',
        paddingVertical: 5,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '25%',
    },
    textModalText: {
        color: 'white',
        fontSize: 14,
    },
});
export default styles;