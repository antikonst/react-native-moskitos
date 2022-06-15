import React from 'react'
import { Text, View, TextInput, StyleSheet } from "react-native"
import { useState } from 'react';

export const Dostavka = ({ onChange }) => {

  const [text, setText] = useState('1500');

  const onChangeText = (text) => {
    setText(text);
    onChange(text);
    if (+text) {
      setText(text);
      if (text > 9001) { setText(text.substr(0, text.length - 1)) };
    }
  };

  return (
    <View style={styles.block}>
      <Text>доставка</Text>
      <TextInput
        style={styles.input}
        maxLength={4}
        placeholder='500'
        keyboardType='numeric'
        autoComplete='cc-number'
        value={text}
        onChangeText={onChangeText}
      />
      <Text>₽</Text>
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
    maxWidth: 90,
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 15,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },

});