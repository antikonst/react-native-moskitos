import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";

const ModalCol = ({ onChange }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [setka, setSetka] = useState('белый');
  const [colBut, setColBut] = useState(styles.whiteSetka)
  const [colTxt, setColTxt] = useState(styles.bt)
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
              style={[styles.whiteSetka]}
              onPress={() => { setModalVisible(!modalVisible), setSetka('белый'), setColBut(styles.whiteSetka), setColTxt(styles.bt), onChangeText('белый') }}
            >
              <Text style={styles.bt}>белый</Text>
            </Pressable>
            <Pressable
              style={[styles.brownSetka]}
              onPress={() => { setModalVisible(!modalVisible), setSetka('коричневый'), setColBut(styles.brownSetka), setColTxt(styles.wt), onChangeText('коричневый') }}
            >
              <Text style={styles.wt}>коричневый</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={colBut}
        onPress={() => setModalVisible(true)}
      >
        <Text style={colTxt}>{setka}</Text>
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
    backgroundColor: "#2196F3",
  },
  whiteSetka: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    borderWidth: 1,
  },
  brownSetka: {
    backgroundColor: "#692a06",
    margin: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 2
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

export default ModalCol;