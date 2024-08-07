import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f2f8',
        padding: 24
    },
    eventName: {
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },
    eventDate: {
        color: '#505155',
        fontSize: 16
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        color: '#383B43',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#7DCC3D',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    form: {
        width: '100%',
        flexDirection: 'row',
        textAlign: "center",        
        marginTop: 36,
        marginBottom: 42
    },
    listEmptyText: {
        color: '#FFFFFF',
        textAlign: "center",
        fontSize: 14 
    }
});