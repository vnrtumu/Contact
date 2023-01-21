import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from '../components/Header';

const AddContact = ({navigation}) => {
  const [name, onChangeName] = React.useState('');
  const [area, onChangeArea] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={styles.viewWrap}>
      <Header
        onPress={() => navigation.goBack()}
        icon="true"
        value="Add Contact"
      />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Enter Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeArea}
          value={area}
          placeholder="Enter Area"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.btnUpdate}
          onPress={() => navigation.goBack()}>
          <Text style={styles.btnTxt}>Add Contact</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewWrap: {
    flex: 1,
    backgroundColor: '#000',
  },
  form: {
    marginTop: 20,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 15,
    borderRadius: 15,
    color: '#fff',
    fontSize: 18,
    borderColor: '#fff',
  },
  btnUpdate: {
    height: 50,
    width: 150,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 30,
    alignSelf: 'center',
  },
  btnTxt: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default AddContact;
