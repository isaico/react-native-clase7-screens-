import { StyleSheet } from 'react-native';
import colors from '../../constants/colors'

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  item: {
    fontSize: 20,
    color: colors.white,
    fontFamily:'RubikRegular'
  },
  btn: {
    color: colors.white,
    fontSize: 20,
    fontWeight:'bold'
  },
 
});
