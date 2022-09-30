import React, {Component, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
  ImageBackground,
  Image,
  AppRegistry,
  PermissionsAndroid,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../Components/Header';
import {captureRef} from 'react-native-view-shot';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

import Icontwo from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import RNFetchBlob from 'rn-fetch-blob';

import {RadialGradient} from 'react-native-svg';

import Slider from '@react-native-community/slider';

// import { useContext } from 'react';
// import NoteContext from '../../Context/NoteContext';

const Nocropboxletterbox = ({props, route, navigation}) => {
  const viewRef = useRef();
  let items = route.params;
  const [Mypic, setMypic] = useState({
    uri: `data:${items.img.mime};base64,${items.img.data}`,
  });
  // var check = items.img.data;

  //     checkPermision = async () => {
  //           if (Platform.OS === 'ios') {
  //             this.downloadImage();
  //           } else {
  //             try {
  //               const granted = await PermissionsAndroid.request(
  //                 PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //                 {
  //                   title: 'Storage Permission Required',
  //                   message: 'App needs access to your storage to download photos',
  //                 },
  //               );
  //               if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //                 console.log('Storage permission Granted');
  //                 downloadImage();
  //               } else {
  //                 console.log('Storage permission not Granted');
  //               }
  //             } catch (error) {
  //               console.log('errro', error);
  //             }
  //           }
  //         };
  // downloadImage = () => {

  //         var Base64Code = check //base64Image is my image base64 string

  //         const dirs = RNFetchBlob.fs.dirs;

  //         var path = dirs.DCIMDir + "/image.png";

  //         RNFetchBlob.fs.writeFile(path, Base64Code[1], 'base64')
  //         .then((res) => {console.log("File : ", res)});

  // }

  //     const imageDate = items.img.data;
  // const imagePath = `${RNFS.TemporaryDirectoryPath}image.jpg`;

  // RNFS.writeFile(imagePath, imageDate, 'base64')
  //     .then(() => console.log('Image converted to jpg and saved at ' + imagePath));

  const Ifont = 'Poplin';
  const defaultimg = require('../../assets/standman.png');
  const blackline = require('../../assets/pics/blackline.png');
  const blackcircle = require('../../assets/pics/blackcircle.png');

  // setMypic({uri: `data:${items.img.mime};base64,${items.img.data}`})
  // console.log("props value are = ", Mypic)

  const printvalue = () => {
    // console.log("props value are = ", Mypic)
    // setMypic({uri: `data:${items.img.mime};base64,${items.img.data}`})
  };

  const [Slidervalue, setSlidervalue] = useState(100);

  // get permission on android
  const getPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Image Download Permission',
          message: 'Your permission is required to save images to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      Alert.alert(
        '',
        'Your permission is required to save images to your device',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    } catch (err) {
      // handle error as you please
      console.log('err', err);
    }
  };

  // download image
  const downloadImage = async () => {
    try {
      // react-native-view-shot caputures component
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.8,
      });

      if (Platform.OS === 'android') {
        const granted = await getPermissionAndroid();
        if (!granted) {
          return;
        }
      }

      // cameraroll saves image
      const image = CameraRoll.save(uri, 'photo');
      if (image) {
        Alert.alert(
          '',
          'Image saved successfully.',
          [{text: 'OK', onPress: () => {}}],
          {cancelable: false},
        );
      }
    } catch (error) {
      console.log('error', error);
    }
  };



  return (
    <View
      style={{
        backgroundColor: '#EFE7FC',
        height: Dimensions.get('window').height,
      }}>
      <LinearGradient
        colors={['#ffffff', '#ECDCF7']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={styles.card}>
          <Header navigation={navigation} title="No Crop Postdd (letter box)" />
        </View>
      </LinearGradient>

      <View
        style={{
          width: '100%',
          height: '55%',
          backgroundColor:'red',
          
        }}
        ref={viewRef}>
        <Image
          source={Mypic}
          style={{height: 380, width: 350,}}
          // resizeMode="contain"
          blurRadius={Slidervalue}
        />
       
        </View>
    

      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
        <Slider
          style={{width: '65%', height: 40, marginLeft: 45}}
          minimumValue={100}
          maximumValue={0}
          minimumTrackTintColor="black"
          maximumTrackTintColor="black"
          onValueChange={value => {
            setSlidervalue(value);
          }}
          trackImage={blackline}
          thumbImage={blackcircle}
          inverted={true}
        />
        <Text style={{fontSize: 11, fontWeight: '500', color: '#000'}}>
          {parseInt(Slidervalue)}%
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 45,
        }}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{tintColor: '#000', height: 22, width: 22}}
            source={require('../../assets/pics/letterbox.png')}
          />
          <Text
            style={{
              color: '#000',
              marginTop: 7,
              fontSize: 9,
              fontWeight: '500',
            }}>
            Letterbox
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{tintColor: '#877D88', height: 22, width: 22}}
            source={require('../../assets/pics/blur.png')}
          />
          <Text style={{marginTop: 7, fontSize: 9, fontWeight: '500'}}>
            Blur
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{tintColor: '#877D88', height: 22, width: 22}}
            source={require('../../assets/pics/background.png')}
          />
          <Text style={{marginTop: 7, fontSize: 9, fontWeight: '500'}}>
            Background
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{tintColor: '#877D88', height: 22, width: 22}}
            source={require('../../assets/pics/crop.png')}
          />
          <Text style={{marginTop: 7, fontSize: 9, fontWeight: '500'}}>
            Crop
          </Text>
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 25,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
        
          style={{
            alignItems: 'center',
            borderRadius: 15,
            backgroundColor: '#3672E9',
            width: '70%',
            height: 59,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={downloadImage}>
          <Text
            style={{
              fontFamily: `${Ifont}`,
              color: '#BFF4FF',
              fontSize: 18,
              fontWeight: '500',
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default Nocropboxletterbox;