import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
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
        margin: 30,
        height: 100,
    },
});
export default styles;