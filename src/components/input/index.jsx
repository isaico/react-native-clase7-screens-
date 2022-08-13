import React from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./styles";
import {placeholderTextColor,buttonColor} from './styles'

const CustomInput = ({item, onChangeText, placeholder, onPressButton, inputValue, buttonText}) => {
    return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        value={item}
        onChangeText={onChangeText}
      />
      <Button title={buttonText} color={buttonColor}  onPress={onPressButton} disabled={inputValue === ''}/>
     </View>
    )
}

export default CustomInput;