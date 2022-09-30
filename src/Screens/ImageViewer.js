import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../Components/Header';

import Icontwo from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

// import { useContext } from 'react';
// import NoteContext from '../../Context/NoteContext';

const Imageviewer = ({navigation}) => {
  // const {globalfont} = useContext(NoteContext);
  // const [Ifont, setIfont] = globalfont;

  const Ifont = 'Poplin';

  return (
    <View
      style={{
        height: Dimensions.get('window').height,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.24)',
      }}>
      <LinearGradient
        colors={['#ffffff', '#ECDCF7']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{borderBottomLeftRadius: 24, borderBottomRightRadius: 24}}>
        <View style={styles.card}>
          <Header navigation={navigation} title="Vijay_rathore" />
        </View>
      </LinearGradient>

      <View
        style={{
          height: '80%',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 5,
        }}>
        <View
          style={{
            height: '100%',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: '100%'}}
            source={require('../../assets/man.png')}
          />
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 14,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <LinearGradient
          colors={['#AA357C', '#E83741']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={{borderRadius: 9}}>
          <View
            style={{
              borderRadius: 9,
              flexDirection: 'row',
              height: 53,
              width: 170,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Icon name="arrowdown" size={20} color="#fff" />
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontFamily: `${Ifont}`,
                width: 100,
              }}>
              Download
            </Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 300,
  },
  mygradient: {
    height: 200,
    width: '80%',
  },
  card: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.24)',
    // backgroundColor: 'pink',
    // backgroundColor: '#F9FAFF',
    // background: radial-gradient(100% 249.45% at 0% 2.78%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%);
  },

  textview: {
    backgroundColor: 'white',
    borderRadius: 14,
    marginHorizontal: 13,
    height: 34,
  },
});

export default Imageviewer;
