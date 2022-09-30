import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

// import { useContext } from 'react';
// import NoteContext from '../../Context/NoteContext';

const Imagecard = props => {
  // const {globalfont} = useContext(NoteContext);
  // const [Ifont, setIfont] = globalfont;

  const Ifont = 'Poplin';

  return (
    <View>
      <TouchableOpacity
        // onPress={() => {
        //   props.navigation.navigate('Uploadimage');
        // }}
        style={{flexDirection: 'row', alignItems: 'center', marginTop: 14}}>
        <View
          style={{
            height: 68,
            width: 68,
            position: 'absolute',
            top: 2,
            left: 2,
          }}>
          <Image style={styles.tinyLogo} source={props.image} />
        </View>
        <View style={{height: 72, width: 72}}>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/imageborder.png')}
          />
        </View>

        <View style={{marginLeft: 20}}>
          <Text style={{color: 'black', fontFamily: `${Ifont}`, fontSize: 14}}>
            {props.title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '300',
              fontFamily: `${Ifont}`,
              marginTop: 2,
            }}>
            {props.username}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    height: '100%',
    width: '100%',
  },
});

export default Imagecard;
