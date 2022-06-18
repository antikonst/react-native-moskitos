import React, { useRef, useEffect } from "react";
import { Easing, Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";

export const Anim = ({ obj, tdalert }) => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = new Animated.Value(0)

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce
    }).start();
  }

  useEffect(() => {
    if (tdalert != '') {
      fadeIn()
    } else {
      fadeOut()
    }
  })

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1,
      useNativeDriver: true,
    }).start();
  }

  const size = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });

  const animatedStyles = [
    {
      opacity: fadeAnim
    },
    {
      //fadeAnim,
      scaleX: size
    }
  ];

  return (
    <SafeAreaView>
      <Animated.View style={animatedStyles} >
        {obj}
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }, 
});
