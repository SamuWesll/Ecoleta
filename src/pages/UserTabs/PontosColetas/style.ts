import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
        width: '100%',
        height: '100%',
    },

    footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 32,
        backgroundColor: '#ffff',
        borderRadius: 20,
        height: 46,
        paddingLeft: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 3,
    },
    footerText: {
        fontFamily: 'Nunito_700Bold',
        color: '#8fa7b3',
    },
    calloutContainer: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 16,
        justifyContent: 'center',
    },
    calloutText: {
        color: '#0089a5',
        fontSize: 14,
        fontFamily: 'Nunito_700Bold'
    },


    // header: {
    //     // backgroundColor: 'gray',
    //     width: '100%',
    //     padding: 20,
    // },
    // headerImg: {
    //     alignItems: 'center'
    // },
    // listaItem: {
    //     marginTop: 20,
    // },
    // listaItemScroll: {
    //     flexDirection: 'row',
    // },
    // buttoItem: {
    //     marginHorizontal: 10,
    //     marginVertical: 15,
    //     borderRadius: 10,
    //     padding: 10,
    //     backgroundColor: '#03bb85',
    //     alignItems: 'center',
    // },
    // selectedButtoItem: {
    //     backgroundColor: '#3e836b'
    // },
    // buttoItemText: {
    //     color: '#ffff',
    //     marginTop: 10,
    // },
    // divider: {
    //     borderBottomColor: 'gray',
    //     borderBottomWidth: 1,
    // },
    // viewMap: {
    //     flex: 1,
    //     width: '90%',
    //     marginLeft: 20,
    // },
    // mapMarker: {
    //     width: '100%',
    //     height: 400,
    // }
})

export default style;