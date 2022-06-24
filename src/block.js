import React from 'react'
import { Text, View, TextInput, StyleSheet, Button } from "react-native"
import { useState, useEffect } from 'react';
import ButtonP from './buttonP';

export const Block = ({ addTask, widthSetki, heightSetki, typenSetki, colorSetki, prSetki, nameSetki, kolvoSetki, raschesSetki, montazhSetki }) => {

  let txt = 'МС ш' + widthSetki + '*в' + heightSetki  + ', ' +  typenSetki + ', ' + colorSetki + ', ' + prSetki + ', ' + nameSetki // + ', ' + kolvoSetki + 'шт; Сетка: ' + raschesSetki + '₽; Монтаж: ' + montazhSetki + '₽;'

  const [text, setText] = useState('')

  useEffect(() => {
    setText(txt)
  });

  const setTextFunc = () => {
    addTask(text)
  }

  return (
      <View style={styles.block}>
        <ButtonP onPress={setTextFunc}>
          <Text style={styles.txt}>
            +
            </Text>
          </ButtonP>
      </View>
  );
}


const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10
  },
  txt: {
    fontSize: 16
  }

});