import React from 'react'
import { Text, View, Button, TextInput, StyleSheet } from "react-native"
import { useState } from 'react';

export const Height = ({ onChange }) => {

  const [text, setText] = useState('');

  const onChangeText = (text) => {
    setText(text);
    onChange(text);
    if (+text) {
      setText(text);
      if (text > 3001) { setText(text.substr(0, text.length - 1)) };
    }
  };

  return (
    <View style={styles.block}>
      <Text>в</Text>
      <TextInput
        style={styles.input}
        maxLength={4}
        placeholder='1200'
        keyboardType='numeric'
        autoComplete='cc-number'
        value={text}
        onChangeText={onChangeText}
      />
      <Text>мм</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    paddingHorizontal: 20,
    fontSize: 20,
    maxWidth: 90,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
});