import * as React from 'react';
import { View, StyleSheet, Button, Platform, Text } from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import ButtonP from './buttonP';


export default function PrintExpo({html, txt}) {

  const print = async () => {
    await Print.printAsync({
      html
    });
  }

  return (
    <View>
      <ButtonP onPress={print}>{txt}</ButtonP>
    </View>
  );
}