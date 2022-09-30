import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Dplist from './Dplist';
import Header from './Header';

// import { useContext } from 'react';
// import NoteContext from '../../Context/NoteContext';

import Icontwo from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const Dpsaverhead = props => {
  // const {globalfont} = useContext(NoteContext);
  // const [Ifont, setIfont] = globalfont;

  const Ifont = 'Poplin';

  return (
    <View
      style={{
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
          <Header navigation={props.navigation} title="DP Saver" />
          <View style={styles.textview}>
            <TextInput
              placeholder={props.searchplacehold}
              style={[{fontFamily: `${Ifont}`}, styles.textbox]}></TextInput>

            <View style={{position: 'absolute', right: 10, top: 7}}>
              <Icontwo name="search" size={20} color="#C6C0CC" />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  mygradient: {
    height: 200,
    width: '80%',
  },
  card: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingBottom: 14,
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
    // flexDirection:'row',
    // alignItems:'center',
  },
  textbox: {
    marginLeft: 17,
    backgroundColor: '#FCFBFF',
    borderRadius: 14,
    // fontFamily: 'Roboto',
    fontSize: 11,
  },
});

export default Dpsaverhead;
