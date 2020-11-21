/**
 * @author: mef25
 */
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

/**
 * Default function for the AddTodo
 * submitHandler represents the button
 */

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo...'
        onChangeText={changeHandler}
      />
      <Button onPress={() => submitHandler(text)} title='Add Todo' color='coral' />
    </View>
  );
}

