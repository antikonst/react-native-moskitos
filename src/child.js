import React from 'react'
import { Text, View, TextInput, StyleSheet } from "react-native"

export const Child = ({ onChange }) => {
  const handleNameChange = (text) => {
    onChange(text)
  }

  return (
    <View style={styles.block}>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        maxLength={4}
        placeholder='1200'
        keyboardType='numeric'
        autoComplete='cc-number'
        //value={text}
        onChangeText={handleNameChange}
      />
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
    margin: 12,
    borderWidth: 1,
    padding: 5,
    fontSize: 26,
    width: '30%',
    textAlign: 'center',
  },

});