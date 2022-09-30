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
import Header from './Header';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker, {openPicker} from 'react-native-image-crop-picker';

const Upload = ({navigation}) => {
  const Ifont = 'Poplin';
  const openPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 500,
      cropping: false,
      // cropperToolbarWidgetColor: 'black',
      // cropperToolbarColor: '#EFE4FB',
      // cropperActiveWidgetColor: 'blue',
      // freeStyleCropEnabled: true,
      // hideBottomControls:true,
      // showCropFrame :false,
      cropperToolbarTitle: '             9 Grid',
      // showCropGuidelinesColor :"black",
      includeBase64: true,
    }).then(image => {
      navigation.navigate('Grid1', {img: image});
    });
  };

  return (
    <View
      style={{
        backgroundColor: '#E4D9FB',
        height: Dimensions.get('window').height,
      }}>
      <LinearGradient
        colors={['#ffffff', '#ECDCF7']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={styles.card}>
          <Header navigation={navigation} title="9 Grid" />
        </View>
      </LinearGradient>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={{height: 130, width: 130, marginTop: 200}}>
          <Image
            style={{height: 130, width: 130}}
            source={require('../Pic/whiteborder.png')}
          />
          <Image
            style={{
              height: 35,
              width: 53,
              position: 'absolute',
              top: 48,
              left: 40,
            }}
            source={require('../Pic/upload.png')}
          />
        </View>
      </View>
      <Text
        style={{
          fontFamily: `${Ifont}`,
          textAlign: 'center',
          fontSize: 15,
          fontWeight: '300',
          color: '#000',
          marginTop: 13,
        }}>
        Upload an image
      </Text>
      <Text
        style={{
          fontFamily: `${Ifont}`,
          textAlign: 'center',
          fontSize: 11,
          fontWeight: '300',
          color: '#000',
        }}>
        Select an iMage to make some cool grids
      </Text>

      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 37}}>
        <TouchableOpacity
          onPress={openPicker}
          style={{
            shadowColor: '#3672E9',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,

            alignItems: 'center',
            borderRadius: 15,
            backgroundColor: '#3672E9',
            width: '80%',
            height: 59,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: `${Ifont}`,
              color: '#BFF4FF',
              fontSize: 18,
              fontWeight: '500',
            }}>
            Upload Image
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    // top:100,
    width: 25,
    height: 25,
    // alignContent:'center',
    borderRadius: 15,
  },
});
export default Upload;
