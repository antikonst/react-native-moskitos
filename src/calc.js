import React from 'react'
import { Text, View, StyleSheet } from "react-native"
import { useState, useEffect } from 'react';

export const Calc = ({ onSetka, widthSetki, heightSetki, typeSetki, onRaschet, montazhSetki, typeMSetki, profilSetki, zamertSetki, dostavkaSetki, kolvoSetki }) => {

  let [itogo, setItogo] = useState('0');

  useEffect(() => {
    let s = (Math.ceil(widthSetki * heightSetki / 1000000) >= 1) ? Math.ceil(widthSetki * heightSetki / 1000000) : 1
    let stoimostMkv = +typeSetki + +typeMSetki + +profilSetki
    let setka = s * stoimostMkv
    itogo = (setka + +montazhSetki)*kolvoSetki + +zamertSetki + +dostavkaSetki
    setItogo(itogo);
    onRaschet(itogo);
    onSetka(setka);
  });

  return (
    <View style={styles.block}>
      <Text style={styles.input} >Итого: {itogo}₽</Text>
    </View>
  )
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
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});


