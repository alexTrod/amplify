import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { CardInput } from './CardInput';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Input #0',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Input #1',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Input #2',
    },    
    {
      id: '58694a0f-3da1-471f-bd96-1S5571e29d72',
      title: 'Input #3',
    },
    {
      id: '58694a0f-35a1-471f-bd96-145571e29d72',
      title: 'Input #4',
    },
  ];


const ListInput = () => {

    const renderItem = ({ item }) => (
        <CardInput title={item.title} />
      );

      return (
        <FlatList
            horizontal
            style={styles.containerInput}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
      );
}

const styles = StyleSheet.create({
    containerInput: {
      backgroundColor: "#fff",
    },
  });
  
export {ListInput};