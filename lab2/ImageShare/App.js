import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const[age,setAge] = useState(0);
  const[name,setName] = useState('John');
  const [birthday, setBirthday] = useState(
    [ 
      {birthday: 'October 1', key : '1'},
      {birthday: 'February 21', key: '2'}
  );
  return (
    <View style={styles.container}>
    <FlatList
      numColumns = {2}
      keyExtractor={(item) => item.id}
      data={birthdays}  
      const Item = {{ birthdays}} => (
      renderItem=({ item})) => (
      <Text style={styles.item}> {item.name } </Text>
      );
  const clickHandler = () => {
    let newAge = age + 1;
    setAge(newAge)
    setBirthday(
      birthdays.concat({key: newAge.toString() })
    );
  };
  
  return
      <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
        style={styles.input} 
        placeholder = 'e.g. John Doe'
        onChangeText(val) => setName(val)} />
      <Text></Text>
        <Button title = 'Birthday' onPress = {clickHandler} />
        </View>
        <Text> {name} is 4 years old</Text?
        <View style={styles.buttonContainer}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    //alignItems: 'center',
    //justifyContent: 'center',
    
  },
  buttonContainer: {
    marginTop:20
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize : 24
    marginHorizontal: 10,
    marginTop: 24,
  }
});
