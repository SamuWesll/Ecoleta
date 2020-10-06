import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
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
        alignItems: 'center',
        // margin: 10,
        height: '100%',
    },
    inputTitle: {
        fontSize: 14,
        marginTop: 10,
        marginLeft: 25,
        fontFamily: 'Aleo_400Regular_Italic'
    },
    viewInput: {
        flexDirection: 'row-reverse',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        // marginTop: 10,
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
    footer: {
        width: '100%',
        height: 100,
        marginBottom: 40,
        alignItems: 'center'
    },
    buttonCadastrar: {
        backgroundColor: 'green',
        borderRadius: 8,
        height: 40,
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
        // fontFamily: 'Aleo_700Bold',

    },
});
export default styles;