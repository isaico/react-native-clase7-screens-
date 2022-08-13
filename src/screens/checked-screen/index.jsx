import React from 'react';
import { Button, View, FlatList, Text } from 'react-native';
import { styles } from '../../generalStyles';

const CheckList = ({ checkItems, onAppStages }) => {
    const renderItem = ({ item }) => (
        <View>
            <Text>{item.id}</Text>
            <Text>{item.value}</Text>
        </View>
    );
    console.log(checkItems, 'itemlist');
    return (
        <View style={styles.itemList}>
            <FlatList
                data={checkItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style
            />
            <View>
                <Button
                    title="volver al menu principal"
                    onPress={() => onAppStages(1)}
                ></Button>
            </View>
        </View>
    );
};
export default CheckList;
