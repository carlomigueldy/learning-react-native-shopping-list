import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text, Button, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: 'Milk',
    },
    {
      id: 2,
      text: 'Eggs',
    },
    {
      id: 3,
      text: 'Bread',
    },
    {
      id: 4,
      text: 'Juice',
    },
  ]);

  const [counter, increment] = useState(0);

  const incrementCounter = () =>
    increment((count) => {
      count = count + 1;
      console.log(count);

      return count;
    });

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (item) => {
    if (!item) {
      Alert.alert('Error', 'Please enter a name', [{text: 'Okay'}]);
    } else {
      setItems((prevItems) => {
        return [
          ...prevItems,
          {
            id: prevItems.length + 10,
            text: item,
          },
        ];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      <Text style={styles.counter}>{counter}</Text>
      <Button title="Title" onPress={() => incrementCounter()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  counter: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 48,
  },
});

export default App;
