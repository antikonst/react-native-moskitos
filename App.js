import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList, SafeAreaView, Dimensions, StyleSheet, Text, View } from 'react-native';
import { Height } from './src/height';
import ModalType from './src/modalType';
import ModalCol from './src/modalColor';
import { Width } from './src/width';
import ModalProfil from './src/profil';
import { Calc } from './src/calc';
import { Montazh } from './src/montazh';
import TypeM from './src/typeM';
import { Zamer } from './src/zamer';
import { Dostavka } from './src/dostavka';
import { Kolvo } from './src/kolvo';
import ButtonP from './src/buttonP'
import { Block } from './src/block';
import ScrollV from './src/scrollView';
import { ToDo } from './src/todo';
import { render } from 'react-dom';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);



export default function App() {

  const renderItem = ({ item }) => (
    <Item title={item.task} />
  );

  const [widthSetki, setWidthSetki] = useState('')
  const [heightSetki, setHeightSetki] = useState('')
  const [typeSetki, setTypeSetki] = useState('1500')
  const [typenSetki, setTypenSetki] = useState('стандарт')
  const [colorSetki, setColorSetki] = useState('белый')
  const [profilSetki, setProfilSetki] = useState('0')
  const [raschetSetki, setRaschetSetki] = useState('0')
  const [raschesSetki, setRaschesSetki] = useState('0')
  const [montazhSetki, setMontazhSetki] = useState('800')
  const [typeMSetki, setTypeMSetki] = useState('0')
  const [nameSetki, setNameSetki] = useState('Z')
  const [prSetki, setPrSetki] = useState('25')
  const [zamerSetki, setZamerSetki] = useState('500')
  const [dostavkaSetki, setDostavkaSetki] = useState('1500')
  const [kolvoSetki, setKolvoSetki] = useState('1')
  const [todos, setTodos] = useState([])
  const [todoss, setTodoss] = useState([])


  const handleChangeWidth = (value) => {
    setWidthSetki(value)
  }

  const handleChangeHeight = (value) => {
    setHeightSetki(value)
  }

  const handleChangeType = (value) => {
    setTypeSetki(value)
    if (value == '1500') {
      setTypenSetki('стандарт')
    } else if (value == '2700') {
      setTypenSetki('антипыль')
    } else {
      setTypenSetki('антикошка')
    }
  }

  const handleChangeColor = (value) => {
    setColorSetki(value)
  }

  const handleChangeProfil = (value) => {
    setProfilSetki(value)
    if (value == '0') {
      setPrSetki('25')
    } else {
      setPrSetki('32')
    }
  }

  const handleChangeRaschet = (value) => {
    setRaschetSetki(value)
  }

  const handleChangeRasches = (value) => {
    setRaschesSetki(value)
  }

  const handleChangeMontazh = (value) => {
    setMontazhSetki(value)
  }

  const handleChangeTypeM = (value) => {
    setTypeMSetki(value)
    if (value == '0') {
      setNameSetki('Z')
    } else if (value == '600') {
      setNameSetki('штоки')
    } else {
      setNameSetki('дверь')
    }
  }

  const handleChangeZamer = (value) => {
    setZamerSetki(value)
  }

  const handleChangeDostavka = (value) => {
    setDostavkaSetki(value)
  }

  const handleChangeKolvo = (value) => {
    setKolvoSetki(value)
  }

  const addTask = (text) => {
    if (text) {
      const newItem = {
        num: todos.length + 1,
        id: Date.now().toString(),
        task: text,
        complete: false,
      }
      setTodos([...todos, newItem])
    }
  }

  const delet = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const seEffe = () => {
    let punkt
    todoss.splice(0, todoss.length,)
    setTodoss(todoss)
    const obj = Object.values([...todos])
    obj.forEach((t, i, v) => {
      let b = obj[i].task
      punkt = i + 1 + '. ' + b + '\r\n'
      todoss.push(punkt)
    })
    alert(todoss)
    console.log(todos)
  }

  return (
    <View>
      <View style={styles.container}>

        <View style={styles.block}>
          <Width onChange={handleChangeWidth} />
          <Height onChange={handleChangeHeight} />
        </View>
        <View style={styles.block}>
          <ModalType onChange={handleChangeType} />
          <ModalCol onChange={handleChangeColor} />
          <ModalProfil onChange={handleChangeProfil} />
        </View>
        <View style={styles.block}>
          <Montazh onChange={handleChangeMontazh} />
          <TypeM onChange={handleChangeTypeM} />
          <Kolvo onChange={handleChangeKolvo} />
        </View>
        <View style={styles.block}>
          <Zamer onChange={handleChangeZamer} />
          <Dostavka onChange={handleChangeDostavka} />
        </View>
        <View>
          <Text>ш{widthSetki}*в{heightSetki}, {typenSetki} {colorSetki} {prSetki} {nameSetki} {kolvoSetki}шт;</Text>
        </View>
        <View>
          <Text>Сетка: {raschesSetki}₽; Монтаж: {montazhSetki}₽</Text>
        </View>
        <View>
          <Text>Замер: {zamerSetki}₽; Доставка: {dostavkaSetki}₽</Text>
        </View>
        <View style={styles.block}>
          <Calc
            onRaschet={handleChangeRaschet}
            widthSetki={widthSetki}
            heightSetki={heightSetki}
            typeSetki={typeSetki}
            colorSetki={colorSetki}
            prSetki={prSetki}
            profilSetki={profilSetki}
            montazhSetki={montazhSetki}
            typeMSetki={typeMSetki}
            zamertSetki={zamerSetki}
            dostavkaSetki={dostavkaSetki}
            nameSetki={nameSetki}
            kolvoSetki={kolvoSetki}
            raschesSetki={raschesSetki}
            onSetka={handleChangeRasches}
          />

          <Block
            addTask={addTask}
            widthSetki={widthSetki}
            heightSetki={heightSetki}
            typeSetki={typeSetki}
            typenSetki={typenSetki}
            colorSetki={colorSetki}
            prSetki={prSetki}
            profilSetki={profilSetki}
            montazhSetki={montazhSetki}
            typeMSetki={typeMSetki}
            zamertSetki={zamerSetki}
            dostavkaSetki={dostavkaSetki}
            nameSetki={nameSetki}
            kolvoSetki={kolvoSetki}
            raschesSetki={raschesSetki}
          />
        </View>


      </View>
      <ScrollV>
        {
          todos.map((todo) => {
            return (
              <View key={todo.id} style={[styles.block, styles.wid100]}>
                <Text
                  style={styles.widcenter}>
                  {todo.task}
                </Text>
                <ButtonP stl={styles.btn} onPress={() => delet(todo.id)}>x</ButtonP>
              </View>
            )
          })
        }
      </ScrollV>
      <View>

        <ButtonP onPress={seEffe}>Список</ButtonP>

        <SafeAreaView style={styles.containerList}>
          <FlatList
            data={todos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            refreshing={true}
          />
        </SafeAreaView>
      </View>

    </View>
  );
}

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
    paddingTop: 10,
  },
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wid100: {
    flex: 1,
    width: imageWidth - 50,
    borderBottomColor: 'black',
    borderBottomWidth: .2,
    padding: 5
  },
  widcenter: {
    width: imageWidth - 90,
  },
  btn: {
    padding: 20
  },
  spisok: {
    backgroundColor: '#eee',
    height: 40
  },
  containerList: {
    backgroundColor: '#eee',
    height: 200
  },
  item: {
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 3,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 14,
  },
});
