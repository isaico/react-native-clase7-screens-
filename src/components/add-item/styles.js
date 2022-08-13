import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#47A5AE',
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
    color: '#ffffff',
    fontWeight:"bold"
  },
  btn: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight:'bold'
  },
 
});
