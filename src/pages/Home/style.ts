import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: '#322153',
        fontSize: 32,
        fontFamily: 'Aleo_700Bold',
        maxWidth: 260,
        marginTop: 64,
    },

    description: {
        color: '#6C6C80',
        fontSize: 14,
        marginTop: 10,
        fontFamily: 'Aleo_400Regular_Italic',
        maxWidth: 260,
        lineHeight: 24,
    },
    footer: {
        // display: 'flex',
        // flexDirection: 'row'
    },

    select: {},

    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },

    button: {
        // backgroundColor: '#34CB79',
        backgroundColor: '#339966',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
        // width: '47%',
        margin: '2%'
    },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        // fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    },
    viewPontos: {
        marginTop: 8,
    },
    viewText: {
        fontSize: 12,
    }
})

export default styles;