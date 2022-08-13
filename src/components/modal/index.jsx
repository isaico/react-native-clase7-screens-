import React from 'react';
import { Modal, View, Text, Button } from 'react-native';
import { styles } from './styles';

const CustomModal = ({
  modalVisible = false,
  animationType,
  onRequestClose = () => null,
  transparent = false,
  item,
  onDeleteItem,
  setModalVisible,
}) => {
  return (
    <Modal
      animationType={animationType}
      visible={modalVisible}
      onRequestClose={onRequestClose}
      transparent={transparent}>
      {/* {children} */}
      <View style={styles.modal}>
        <View style={styles.modalContentContainer}>
          <Text style={styles.modalTitle}>Detalle de la lista</Text>
        </View>
        <View style={styles.modalContentContainer}>
          <Text style={styles.modalMessage}> ¿Estás seguro que deseas eliminar el item?</Text>
        </View>
        <View style={styles.modalContentContainer}>
          <Text style={styles.modalItem}>"{item.value}"</Text>
        </View>
        <View style={styles.modalButton}>
          <Button title="Eliminar" onPress={() => onDeleteItem(item.id)} color="#FF9C71" />
          <Button title="Cancelar" onPress={() => setModalVisible(!modalVisible)} color="#838383" />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
