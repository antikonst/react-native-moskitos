import moment from 'moment';
import React, { useState } from 'react';
import { TextInput, Button, Platform, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import ButtonP from './buttonP'
import { DogovorRyba } from './dogovorRyba';
import PrintExpo from './print';

export const Dogovor = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [fio, setFio] = useState('');
  const [adres, setAdres] = useState('');
  const [tel, setTel] = useState('');
  const [dannye, setDan] = useState(' ');
  const [fini, setFini] = useState(' ');


  const onChangeFio = (text) => {
    setFio(text);
  }
  const onChangeAdres = (text) => {
    setAdres(text);
  }
  const onChangeTel = (text) => {
    setTel(text);
  }
  const onChangeDan = (text) => {
    setDan(text);
  }

//let dateN = new Date()
let date = moment().format('L').replace(/\//g, '.') + 'г.'
let nomer = moment().format("DMM") + '_' + moment().format("HHmm")
const onBlurFio = () => {
  if ( Array.from(fio.split(' ')).length >= 3 ) {
    let finiArr = fio.split(' ')
    setFini(finiArr[0] + ' ' + Array.from(finiArr[1])[0] + '. ' + Array.from(finiArr[2])[0] + '.')
  }
}



  const dogovorObj = <DogovorRyba />
  let dogovorPlus = dogovorObj.type
  dogovorPlus = dogovorPlus.replace(/fio/g, fio)
  dogovorPlus = dogovorPlus.replace(/date/g, date)
  dogovorPlus = dogovorPlus.replace(/nomer/g, nomer)
  dogovorPlus = dogovorPlus.replace(/fini/g, fini)
  dogovorPlus = dogovorPlus.replace(/tel/g, tel)
  dogovorPlus = dogovorPlus.replace(/adres/g, adres)
  dogovorPlus = dogovorPlus.replace(/dannye/g, dannye)

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
            <Text style={styles.modalText}>Введите данные</Text>
            <TextInput
              style={styles.input}
              maxLength={60}
              placeholder='ФИО'
              onChangeText={onChangeFio}
              multiline={true}
              onBlur={onBlurFio}
            />
            <TextInput
              style={styles.input}
              maxLength={60}
              placeholder='Адрес'
              onChangeText={onChangeAdres}
              multiline={true}
            />
            <TextInput
              style={styles.input}
              maxLength={10}
              placeholder='Телефон'
              keyboardType='numeric'
              autoComplete='cc-number'
              onChangeText={onChangeTel}
            />
            <TextInput
              style={styles.input}
              maxLength={60}
              placeholder='Данные'
              onChangeText={onChangeDan}
              multiline={true}
            />
            <PrintExpo html={dogovorPlus} txt={'Договор'} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Данные</Text>
      </Pressable>
    </View>
  )

}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
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
    paddingHorizontal: 20
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
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginEnd: 15
  },
  input: {
    flex: 1,
    //maxWidth: 90,
    height: 40,
    margin: 5,
    borderWidth: 1,
    paddingHorizontal: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
});