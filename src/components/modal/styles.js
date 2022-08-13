import { StyleSheet } from "react-native"
import colors from '../../constants/colors'


export const styles = StyleSheet.create({
    modalContentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
      },
      modalTitle: {
        fontSize: 20,
        color:colors.modalPrimary
      },
      modalMessage: {
        fontSize: 16,
      },
      modalItem: {
        fontSize: 20,
        color: colors.modalPrimary,
        fontWeight: 'bold',
      },
      modalButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 20,
        
      },
      modal: {
        flex: 1,
        paddingTop: 30,
        backgroundColor:colors.background
      }
})