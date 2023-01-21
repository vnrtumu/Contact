import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({navigation, onPress, value, icon, style}) => {
  return (
    <View style={[style, styles.mainContainer]}>
      {icon === 'true' ? (
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.backBtn}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>{value}</Text>
        </View>
      ) : (
        <View style={styles.headerFalseContainer}>
          <Text style={styles.headerFalseText}>{value}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  headerFalseContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  headerFalseText: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 'bold',
    alignSelf: 'center',
    alignItems: 'center',
  },
  backBtn: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
  headerText: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Header;
