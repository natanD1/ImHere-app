import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginRight: 25
    },
    name: {
        flex: 1,
        fontSize: 16,
        color: '#383B43',
        marginLeft: 16,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#F64E60',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12,
    },
});