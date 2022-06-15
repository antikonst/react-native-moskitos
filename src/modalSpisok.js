import React, { useState, useEffect } from "react";
import { Share, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import * as Clipboard from 'expo-clipboard';

export const ModalSpisok = ({ tdalert }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [setka, setSetka] = useState('')
  useEffect (() => {
    setSetka(tdalert)
  },)

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(setka);
    };

    const onShare = async () => {
      try {
        const result = await Share.share({
          message: setka,
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };

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
            <Text style={styles.modalText}>Список сеток</Text>
            <Text selectable={true}>{setka}</Text>
            <View style={styles.block}>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={copyToClipboard}
              >
                <Text style={styles.textStyle}>Copy</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={onShare}
              >
                <Text style={styles.textStyle}>{'>'}</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Список сеток</Text>
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
    paddingHorizontal: 20
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
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //marginEnd: 15
  },
});
