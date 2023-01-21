import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../components/Header';

const ViewContact = ({navigation}) => {
  return (
    <SafeAreaView style={styles.viewWrap}>
      <Header
        onPress={() => navigation.goBack()}
        icon="true"
        value="View Contact"
      />
      <View style={styles.block}>
        <Image
          source={require('../assets/img/contact1.jpeg')}
          style={styles.imageHolder}
        />
        <View style={styles.detailWrap}>
          <Text style={styles.nameText}>Venkat Reddy</Text>
          <Text style={styles.areaText}>Banagalore</Text>
          <Text style={styles.numberText}>+91 87900 10929</Text>
          <TouchableOpacity
            style={styles.btnUpdate}
            onPress={() => navigation.navigate('EditContact')}>
            <Text style={styles.btnTxt}>Update Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewWrap: {
    flex: 1,
    backgroundColor: '#000',
  },
  block: {
    marginTop: 100,
    marginHorizontal: 20,
    height: 300,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  imageHolder: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginTop: -60,
  },
  detailWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  areaText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginTop: 4,
  },
  numberText: {
    color: '#000',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '500',
  },
  btnUpdate: {
    height: 50,
    width: 150,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 30,
  },
  btnTxt: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default ViewContact;
