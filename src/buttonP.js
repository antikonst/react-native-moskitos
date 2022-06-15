import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const ButtonP = ({onPress, children, stl}) => {
  
  return (
      <Pressable
        style={[styles.button, {stl}]}
        onPress={onPress}
      >
        <Text style={styles.textStyle}>{children}</Text>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: 5,
    borderRadius: 20,
    paddingHorizontal: 17,
    elevation: 2,
    backgroundColor: "#2166F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
});

export default ButtonP;