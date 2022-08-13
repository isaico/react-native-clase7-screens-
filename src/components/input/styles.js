import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        
    },
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#47A5AE',
        paddingVertical: 10,
        fontSize: 20,
        fontWeight:'bold',
        
    },
});
export const placeholderTextColor = '#cccccc'
export const buttonColor='#47A5AE'