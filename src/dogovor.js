import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { TextInput, Button, Platform, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import ButtonP from './buttonP'
import { DogovorRyba } from './dogovorRyba';
import PrintExpo from './print';
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'
import { Otpr } from './otpr';
import { Podpis } from './podpis';

export const Dogovor = ({ td }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [fio, setFio] = useState('_____________________________________________');
  const [adres, setAdres] = useState(' ');
  const [tel, setTel] = useState(' ');
  const [dannye, setDan] = useState(' ');
  const [fini, setFini] = useState('_______________________');
  const [pred, setPred] = useState('0');
  const [sum, setSum] = useState('');
  const [srok, setSrok] = useState('10-ти');
  useEffect(() => {
    setSum(td)
  })

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
  const onChangePred = (text) => {
    setPred(text);
  }
  const onChangeSrok = (text) => {
    setSrok(text);
  }


  let date = moment().format("DD") + '.' + moment().format("MM") + '.' + moment().format("YYYY") + 'г.'
  let nomer = moment().format("DMM") + '_' + moment().format("HHmm")
  const onBlurFio = () => {
    if (Array.from(fio.split(' ')).length >= 3) {
      let finiArr = fio.split(' ')
      setFini(finiArr[0] + ' ' + Array.from(finiArr[1])[0] + '. ' + Array.from(finiArr[2])[0] + '.')
    } else {
      setFini('______________________________')
    }
  }

  const predoplata = pred + ' руб. 00 коп. (' + convertNumberToWordsRu(pred) + ')'

  const summa = sum + ' руб. 00 коп. (' + convertNumberToWordsRu(sum) + ').'

  const pechatObj = <Otpr />
  const pechat = `<img src="data:image/png;base64,${pechatObj.type}" style="width: 20vw; position:relative; top:50px; left:-10px;" />`
  const podpisObj = <Podpis />
  const podpis = `<img src="data:image/png;base64,${podpisObj.type}" style="width: 20vw; position:relative; top:50px; left:-80px;" />`

  const dogovorObj = <DogovorRyba />
  let dogovorPlus = dogovorObj.type
  dogovorPlus = dogovorPlus.replace(/fio/g, fio)
  dogovorPlus = dogovorPlus.replace(/date/g, date)
  dogovorPlus = dogovorPlus.replace(/nomer/g, nomer)
  dogovorPlus = dogovorPlus.replace(/fini/g, fini)
  dogovorPlus = dogovorPlus.replace(/tel/g, tel)
  dogovorPlus = dogovorPlus.replace(/adres/g, adres)
  dogovorPlus = dogovorPlus.replace(/dannye/g, dannye)
  dogovorPlus = dogovorPlus.replace(/predoplata/g, predoplata)
  dogovorPlus = dogovorPlus.replace(/summa/g, summa)
  dogovorPlus = dogovorPlus.replace(/srok/g, srok)
  dogovorPlus = dogovorPlus.replace(/pechat/g, pechat)
  dogovorPlus = dogovorPlus.replace(/podpis/g, podpis)

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
            <TextInput
              style={styles.input}
              maxLength={10}
              placeholder='Предоплата'
              keyboardType='numeric'
              autoComplete='cc-number'
              onChangeText={onChangePred}
            />
            <TextInput
              style={styles.input}
              maxLength={10}
              placeholder='10-ти'
              onChangeText={onChangeSrok}
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