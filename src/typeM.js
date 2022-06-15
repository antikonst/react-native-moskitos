import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const TypeM = ({ onChange }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [setka, setSetka] = useState('Z');
  const [data, setData] = useState('0');
  const onChangeText = (text) => {
    onChange(text);
    setData(data);
  }
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Выберите тип монтажа</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => { setModalVisible(!modalVisible), setSetka('Z'), onChangeText('0') }}
            >
              <Text style={styles.textStyle}>Z</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => { setModalVisible(!modalVisible), setSetka('Штоки'), onChangeText('600') }}
            >
              <Text style={styles.textStyle}>Штоки</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => { setModalVisible(!modalVisible), setSetka('Дверь'), onChangeText('1500') }}
            >
              <Text style={styles.textStyle}>Дверь</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>{setka}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    margin: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    paddingHorizontal: 25,
  },
  buttonOpen: {
    backgroundColor: "#2166F3",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default TypeM;