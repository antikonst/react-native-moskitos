import React, { useState } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";

const Color = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#692a06", true: "#fff" }}
        thumbColor={isEnabled ? "#692a06" : "#fff"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text>{(isEnabled)? 'коричневый' : 'белый'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eee",
    paddingHorizontal: 20,
    marginVertical: 15,
  }
});

export default Color;