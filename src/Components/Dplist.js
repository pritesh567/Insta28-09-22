import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Imagecard from './ImageCard';

// import { useContext } from 'react';
// import NoteContext from '../../Context/NoteContext';

const Dplist = () => {
  // const {globalfont} = useContext(NoteContext);
  // const [Ifont, setIfont] = globalfont;

  const Ifont = 'Poplin';

  const [people, setPeople] = useState([
    {
      title: 'Vijay Rathore',
      key: '1',
      username: '@vijay_rathore',
      image: require('../../assets/pic1.png'),
    },
    {
      title: 'Amit Giri',
      key: '2',
      username: '@he_amit',
      image: require('../../assets/pic2.png'),
    },
  ]);

  return (
    <View
      style={{
        backgroundColor: 'rgba(249, 250, 255, 0.35)',
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        marginTop: 9,
        height: '100%',
      }}>
      <View style={styles.headingCard}>
        <TouchableOpacity
          //   onPress={() => navigation.navigate('Dpsaverone')}
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#3672E9',
              fontWeight: '700',
              fontFamily: `${Ifont}`,
              fontWeight: 'bold',
              fontSize: 13,
              lineHeight: 19,
            }}>
            Recent Search
          </Text>
          <View style={styles.bshow1}></View>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={() => navigation.navigate('Dpsavertwo')}
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#3672E9',
              fontFamily: `${Ifont}`,
              fontSize: 13,
              lineHeight: 19,
            }}>
            Download
          </Text>
          <View style={styles.bshow2}></View>
        </TouchableOpacity>
      </View>

      <View style={{paddingLeft: 25, marginTop: 18}}>
        <FlatList
          data={people}
          renderItem={({item}) => (
            <Imagecard
              title={item.title}
              username={item.username}
              image={item.image}
              //   navigation={navigation}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 23,
  },
  bshow1: {
    marginTop: 10,
    height: 5,
    width: 28,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    backgroundColor: '#3672E9',
  },
  bshow2: {
    marginTop: 10,
    height: 5,
    width: 28,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    // backgroundColor: '#3672E9',
  },
});

export default Dplist;
