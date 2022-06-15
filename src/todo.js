import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const ToDo = ({ number, todos, delet }) => {

  return (
    <View style={styles.block}>
      <View>{number=todos.length}</View>
      <View>
        {todos}
      </View>
      <View>
          {delet}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
