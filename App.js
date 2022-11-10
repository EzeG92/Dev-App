import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity, Pressable, Image } from 'react-native';
import Modal from './components/Modal';

export default function App() {
  const [textItem, setTextItem] = useState('');
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandleChangeItem = (t) => {
    setTextItem(t)
  }

  const addItem = () => {
    setList(currentItems => [
      ...currentItems,
      { id: Math.random().toString(), value: textItem }
    ])
    setTextItem('')
  }

  const selectedItem = (id) => {
    setItemSelected(list.filter((item) => item.id === id)[0]);
    setModalVisible(true);
  };

  const deleteItem = () => {
    setList((currentState) =>
      currentState.filter((item) => item.id !== itemSelected.id)
    );
    setItemSelected({});
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (

    <View>
      <Text style={styles.addItem}>{item.value}</Text>
      <View>
        <TouchableOpacity onPress={() => selectedItem(item.id)}>
          <Text style={styles.removeItem}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );

  const removeList = () => {
    setList('')
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>lista de compras</Text>
      <View style={styles.itemContainer}>
        <TextInput
          value={textItem}
          placeholder='Escribe aqui'
          placeholderTextColor={'black'}
          style={styles.inputItem}
          onChangeText={onHandleChangeItem} />
        <Pressable
          onPress={addItem}
          style={styles.addItemButton}
        >
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>Agregar</Text>
        </Pressable>
      </View>

      <View>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ height: 500 }}
        />
      </View>
      

      {list && (
          <View style={styles.removeList}>
            <Pressable
              onPress={() => removeList()}
              style={styles.removeListButton}
            >
              <Text style={styles.removeListText}>Borrar lista</Text>
            </Pressable>
          </View>
        )}


      <Modal isVisible={modalVisible} actionDeleteItem={deleteItem} setModal={setModalVisible} />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: '#F1FAEE',
  },

  title: {
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    textTransform: 'uppercase',
    color: 'black'
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputItem: {
    color: 'black',
    marginRight: 10,
    marginTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
    color: 'black'
  },

  addItem: {
    color: '#1D3557',
    marginTop: 20,
    fontSize: 20,
    backgroundColor: '#A8DADC',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,

  },

  addItemButton: {
    backgroundColor: '#457B9D',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
  },

  removeItem: {
    backgroundColor: '#F1FAEE',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 8,
    width: 40,
    marginLeft: 300,
    marginTop: -42,
    color: 'black',
    textAlign: 'center'
  },

  removeListButton: {
    backgroundColor: '#E63946',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -100
  },

  removeListText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }

});
