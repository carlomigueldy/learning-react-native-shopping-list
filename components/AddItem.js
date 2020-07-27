import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({item, addItem}) => {
  const [text, setText] = useState('');

  const onChanged = (text) => setText(text);

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChanged}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          <Icon nane="plus" size={20} style={styles.icon} /> Add Item
        </Text>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#f5f5f5',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
