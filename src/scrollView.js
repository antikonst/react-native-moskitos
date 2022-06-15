import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

const ScrollV = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          {children}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //paddingTop: StatusBar.currentHeight,
    paddingTop: 10,
    height: 150
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default ScrollV;