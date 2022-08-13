import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';


const AddItem = ({ item, onHandlerModal, onHandleChecked }) => {
   
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.value}</Text>
            <TouchableOpacity onPress={() => onHandlerModal(item.id)}>
                <Text style={styles.btn}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onHandleChecked(item)}>
               
                <Text style={styles.btn}>✓</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddItem;
