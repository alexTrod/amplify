import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { CardOutput } from './CardOutput';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Output #0',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Output #1',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Output #2',
    },
  ];


const ListOutput = () => {

    const renderItem = ({ item }) => (
        <CardOutput title={item.title} />
      );

      return (
        <FlatList
            horizontal
            style={styles.containerOutput}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
      );
}

const styles = StyleSheet.create({
    containerOutput: {
        backgroundColor: "#fff",
      },
  });
  
export {ListOutput};