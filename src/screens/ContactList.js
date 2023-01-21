import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ContactCard from '../components/ContactCard';

const ContactList = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.listView}>
        <ContactCard
          image={require('../assets/img/contact1.jpeg')}
          name="Venkat Reddy"
          area="Banagalore"
          number="87900 10929"
          style={styles.ContactCard}
          onPress={() => {
            navigation.navigate('SingleContact');
          }}
        />
        <ContactCard
          image={require('../assets/img/contact2.jpeg')}
          name="Venkat Reddy"
          area="Banagalore"
          number="87900 10929"
          style={styles.ContactCard}
          onPress={() => {
            navigation.navigate('SingleContact');
          }}
        />
        <ContactCard
          image={require('../assets/img/contact3.jpeg')}
          name="Venkat Reddy"
          area="Banagalore"
          number="87900 10929"
          style={styles.ContactCard}
          onPress={() => {
            navigation.navigate('SingleContact');
          }}
        />
        <ContactCard
          image={require('../assets/img/contact4.jpeg')}
          name="Venkat Reddy"
          area="Banagalore"
          number="87900 10929"
          style={styles.ContactCard}
          onPress={() => {
            navigation.navigate('SingleContact');
          }}
        />
        <ContactCard
          image={require('../assets/img/contact5.jpeg')}
          name="Venkat Reddy"
          area="Banagalore"
          number="87900 10929"
          style={styles.ContactCard}
          onPress={() => {
            navigation.navigate('SingleContact');
          }}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.btnUpdate}
          onPress={() => navigation.navigate('AddContact')}>
          <Text style={styles.btnTxt}>Add Contact</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listView: {
    marginHorizontal: 10,
  },
  ContactCard: {
    marginVertical: 10,
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
export default ContactList;
