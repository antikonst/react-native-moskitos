import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Dimensions, StyleSheet, Text, View } from 'react-native';
import { Height } from './src/height';
import ModalType from './src/modalType';
import ModalCol from './src/modalColor';
import { Width } from './src/width';
import ModalProfil from './src/profil';
import { Montazh } from './src/montazh';
import TypeM from './src/typeM';
import { Zamer } from './src/zamer';
import { Dostavka } from './src/dostavka';
import { Kolvo } from './src/kolvo';
import ButtonP from './src/buttonP'
import { Block } from './src/block';
import { ModalSpisok } from './src/modalSpisok';
import { Anim } from './src/animate';
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'
import RNPrint from 'react-native-print';

const Item = ({ title, price, montazh, num, id, delet }) => (
  <View style={[styles.item, styles.block]}>
    <Text style={styles.titlet}>{title}</Text>
    <Text style={styles.title}> {price}₽ </Text>
    <Text style={styles.title}> {montazh}₽ </Text>
    <Text style={styles.title}> {num}шт </Text>
    <ButtonP onPress={() => delet(id)} stl={styles.tex}><Text>x</Text></ButtonP>
  </View>
);



export default function App() {


  const renderItem = ({ item }) => (
    <Item
      title={item.task}
      price={item.raschesSetki}
      montazh={item.montazhSetki}
      num={item.kolvoSetki}
      id={item.id}
      delet={delet}
    />
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
  const [td, setTd] = useState('')
  const [tdalert, setTdalert] = useState('')

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

  /* const handleChangeRasches = (value) => {
    setRaschesSetki(value)
  } */

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
        kolvoSetki: kolvoSetki,
        raschesSetki: raschesSetki,
        montazhSetki: montazhSetki
      }
      setTodos([...todos, newItem])
    }
  }

  const delet = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  useEffect(() => {
    let punkt
    todoss.splice(0, todoss.length,)
    setTodoss(todoss)
    const obj = Object.values([...todos])
    obj.forEach((t, i, v) => {
      let b = obj[i].task
      punkt = i + 1 + '. ' + b + ', ' + obj[i].kolvoSetki + 'шт.' + '\r\n'
      todoss.push(punkt)
    })
    let textSpiska = todoss.join('')
    setTdalert(textSpiska)
  })



  /* const createTwoButtonAlert = () =>
  Alert.alert(
    "Список москитных сеток",
    tdalert,
    [
      {
        text: "Cancel",
        //onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      {
        text: "OK",
        //onPress: () => setstr()
      }
    ]
  ); */

  const Vsego = (props) => {
    let { d } = props
    useEffect(() => {

      let s = (Math.ceil(widthSetki * heightSetki / 10000) / 100 >= 1) ? Math.ceil(widthSetki * heightSetki / 10000) / 100 : 1
      let stoimostMkv = +typeSetki + +typeMSetki + +profilSetki
      let setka = s * stoimostMkv
      setRaschesSetki(setka)

      const obj = Object.values([...todos])
      let b
      let c = 0
      obj.forEach((t, i, v) => {
        b = (+obj[i].raschesSetki + +obj[i].montazhSetki) * +obj[i].kolvoSetki
        c = c + b
      })
      d = c + +zamerSetki + +dostavkaSetki
      setTd(d)
    }, [d])

    return (
      <View style={vid}>
        <Text style={styles.input}>Итого: {td}₽</Text>
      </View>
    )
  }

  let vid = (tdalert == '') ? styles.nevidim : ''

  var htmlString = `<div> (HTML contents here) </div>`;
  RNPrint.print({html: htmlString})
  
  
  //ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);

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
        {/* <View>
          <Text>ш{widthSetki}*в{heightSetki}, {typenSetki} {colorSetki} {prSetki} {nameSetki} {kolvoSetki}шт;</Text>
        </View> */}
        {/* <View>
          <Text>Сетка: {raschesSetki}₽; Монтаж: {montazhSetki}₽</Text>
        </View> */}
        {/* <View>
          <Text style={styles.input}>Замер: {zamerSetki}₽; Доставка: {dostavkaSetki}₽</Text>
        </View> */}
        <View style={styles.block}>
          {/* <Calc
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
          /> */}

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
          //style={vid}
          />


          <Anim tdalert={tdalert} obj={<Vsego />}></Anim>
          <Anim tdalert={tdalert} obj={<ModalSpisok tdalert={tdalert} style={vid} />}></Anim>

        </View>
        <Anim tdalert={tdalert} obj={<Text>{convertNumberToWordsRu(td)}</Text>}></Anim>

      </View>
      {/* <ScrollV>
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
      </ScrollV> */}
      <View>

        {/* <ButtonP onPress={createTwoButtonAlert}>Список</ButtonP> */}


        <SafeAreaView style={styles.containerList}>
          <FlatList
            style={styles.maxW}
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
const imageHeight = dimensions.height - 325;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 35,
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
    height: imageHeight,
  },
  maxW: {
    maxWidth: imageWidth,
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
  titlet: {
    fontSize: 14,
    flex: 1
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  vidim: {
    display: 'block'
  },
  nevidim: {
    display: 'none'
  },
  tex: {
    paddingTop: 5,
    paddingBottom: 8
  },
  
});
