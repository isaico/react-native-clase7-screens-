import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './src/generalStyles';
// import  MainView  from './src/screens/index'
import { MainView, CheckList } from './src/screens/index';

export default function App() {
    /* ---------------------------------- HOOKS --------------------------------- */

    const [appStages, setAppStages] = useState(1);
    const [checkItems, setCheckItems] = useState([]);
    const [itemList, setItemList] = useState([]); //
    const [item, setItem] = useState(''); //
    const inputValue = item.trim();

    const addItem = () => {
        //
        if (inputValue) {
            setItemList([
                ...itemList,
                {
                    id: itemList.length + 1,
                    value: item,
                },
            ]);
            setItem('');
        }
    };
    const onChangeText = (text) => {
        setItem(text);
    };

    const onAppStages = (stage) => {
        setAppStages(stage);
    };
    const onHandleChecked = (item) => {
        //luego hay q hacer la funcionalidad de no  ingresar repetidos
        setCheckItems([...checkItems, item]);
  
    };

    let content;
   //si hubiera un context se podria evitar pasar tantos argumentos hacia el MainView, por el momento
   //es la mejor solucion que encontre para que haya persistencia en las distintas screens
    appStages === 1
        ? (content = (
              <MainView
                  onAppStages={onAppStages}
                  onHandleChecked={onHandleChecked}
                  addItem={addItem}
                  setItemList={setItemList}
                  itemList={itemList}
                  item={item}
                  onChangeText={onChangeText}
                  inputValue={inputValue}
              />
          ))
        : (content = (
              <CheckList checkItems={checkItems} onAppStages={onAppStages} />
          ));

    return <SafeAreaView style={styles.container}>{content}</SafeAreaView>;
}
