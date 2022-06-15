import React from 'react'
import { Text, View, TextInput, StyleSheet } from "react-native"
import { useState } from 'react';

export const Width = ({ onChange }) => {

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
      <Text>ш</Text>
      <TextInput
        style={styles.input}
        maxLength={4}
        placeholder='600'
        keyboardType='numeric'
        autoComplete='cc-number'
        value={text}
        onChangeText={onChangeText}
      />
      <Text>мм*</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginEnd: 15
  },
  input: {
    maxWidth: 90,
    height: 40,
    margin: 5,
    borderWidth: 1,
    paddingHorizontal: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },

});