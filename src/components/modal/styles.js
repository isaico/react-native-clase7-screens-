import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    modalContentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
      },
      modalTitle: {
        fontSize: 20,
        color:'#FF9C71'
      },
      modalMessage: {
        fontSize: 16,
      },
      modalItem: {
        fontSize: 20,
        color: '#FF9C71',
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
        backgroundColor:'#F2F0D8'
      }
})