import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";

const ModalProfil = ({ onChange }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [setka, setSetka] = useState('25мм');
  const onChangeText = (text) => {
    onChange(text);
  }
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Выберите цвет</Text>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => { setModalVisible(!modalVisible), setSetka('25мм'), onChangeText('0') }}
            >
              <Text style={styles.textStyle}>25мм</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => { setModalVisible(!modalVisible), setSetka('32мм'), onChangeText('900') }}
            >
              <Text style={styles.textStyle}>32мм</Text>
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
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#2166F3",
  },
  buttonClose: {
    backgroundColor: "#2166F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
bt: {
  color: "black",
    fontWeight: "bold",
    textAlign: "center"
},
wt: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},
});

export default ModalProfil;