import { StyleSheet } from "react-native";
import colors from "./constants/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop:50,
    },
    itemList: {
      backgroundColor: colors.background,
      flex: 1,
      marginVertical: 20,
      marginHorizontal: 20,
    },
   
  });