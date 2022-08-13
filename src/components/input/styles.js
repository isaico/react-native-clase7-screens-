import { StyleSheet } from "react-native";
import colors from '../../constants/colors'

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
        borderBottomColor: colors.primary,
        paddingVertical: 10,
        fontSize: 20,
        fontWeight:'bold',
        
    },
});
export const placeholderTextColor = colors.placeholder
export const buttonColor= colors.primary