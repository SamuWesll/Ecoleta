import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    keyboard: {
        flex: 1,
    },
    container: {
        padding: 26,
        height: '100%'
    },
    header: {
        marginTop: 10,
    },
    main: {
        marginTop: 200,
        alignItems: 'center',
        width: '100%',
    },
    mainText: {
        marginTop: 14,
        fontSize: 18,
        fontFamily: 'Aleo_400Regular_Italic',
    },
    containerInputs: {
        marginTop: 100,
        width: '100%'
    },
    inputTitle: {
        fontSize: 14,
        fontFamily: 'Aleo_400Regular_Italic',
    },
    viewInput: {
        flexDirection: 'row-reverse',
        // width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
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
    },
    footer: {
        marginVertical: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttoFooterLogin: {
        backgroundColor: 'green',
        borderRadius: 8,
        width: '80%',
        height: 45,
        alignItems: 'center',
        flexDirection:'row',
        paddingHorizontal: 20,
    },
    footerLoginText: {
        color: '#ffff',
        fontSize: 20,
        fontWeight: 'bold',
        width: '90%',
        textAlign: 'center'
    },
});

export default styles;