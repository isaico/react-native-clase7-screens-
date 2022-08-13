import React, { useState } from 'react';
import { View, FlatList, Button } from 'react-native';
import { styles } from '../../generalStyles';
import { CustomInput, AddItem, CustomModal } from '../../components/index';

const MainView = ({
    onAppStages,
    onHandleChecked,
    addItem,
    itemList,
    setItemList,
    item,
    onChangeText,
    inputValue,
}) => {
    /* ---------------------------------- HOOKS --------------------------------- */

    const [itemSelected, setItemSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const renderItem = ({ item }) => (
        <AddItem
            item={item}
            onHandlerModal={onHandlerModal}
            onHandleChecked={onHandleChecked}
        />
    );
    const onDeleteItem = (id) => {
        setItemList((currentItems) =>
            currentItems.filter((item) => item.id !== id)
        );
        setItemSelected({});
        setModalVisible(!modalVisible);
    };
    //se puede abstraer el modal para que funcione tanto para borrar como para agregar
    //a la lista de checkeds, luego cuando tenga context lo mejorare
    const onHandlerModal = (id) => {
        setItemSelected(itemList.find((item) => item.id === id));
        setModalVisible(!modalVisible);
    };

    return (
        <>
            <CustomInput
                item={item}
                onChangeText={onChangeText}
                placeholder="Enter item"
                onPressButton={addItem}
                inputValue={inputValue}
                buttonText="Add"
            />
            <View style={styles.itemList}>
                <FlatList
                    data={itemList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    style
                />
            </View>
            <CustomModal
                animationType="fade"
                modalVisible={modalVisible}
                item={itemSelected}
                onDeleteItem={onDeleteItem}
                setModalVisible={setModalVisible}
            />
            <View>
                <Button
                    title="Ver lista de tareas completas"
                    onPress={() => onAppStages(2)}
                ></Button>
            </View>
        </>
    );
};
export default MainView;
