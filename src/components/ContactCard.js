import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const width = Dimensions.get('window').width;
const ContactCard = ({image, name, area, number, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style, styles.ContactCardWrap]}>
      <View style={styles.imgWrap}>
        <Image style={styles.profilePic} source={image} />
      </View>
      <View style={styles.detailWrap}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.areaText}>{area}</Text>
        <Text style={styles.numberText}>{number}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ContactCardWrap: {
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 15,
  },
  imgWrap: {
    width: width / 4,
    alignItems: 'center',
  },
  profilePic: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  detailWrap: {
    width: (2 * width) / 3,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  areaText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#fff',
    marginTop: 4,
  },
  numberText: {
    color: '#fff',
    marginTop: 5,
    fontSize: 15,
  },
});

export default ContactCard;
