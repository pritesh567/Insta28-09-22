import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../Components/Header';

import Icontwo from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
// import { PESDK } from 'react-native-photoeditorsdk';
// PESDK.unlockWithLicense(require('./pesdk_license'));
import ImagePicker, {openPicker} from 'react-native-image-crop-picker';

const Dpdesign = () => {
  return (
    <>
      <View
        style={{
          marginLeft: 12,
          borderRadius: 200,
          height: 48,
          width: 48,
          borderWidth: 1,
          backgroundColor: 'rgba(196, 196, 196, 0.98)',
        }}></View>
    </>
  );
};

const Dpcreateone = ({navigation}) => {
  const Ifont = 'Poplin';
  // const [file, setFile] = useState("https://picsum.photos/200/300.jpg");

  const openPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
      includeBase64: true,
    })
      .then(image => {
        console.log(image);
        //  const photo = image
        // const path = image.path();
        // console.log(path);
        // const sPlitedArray = image.path.split('/');
        // const fileName = sPlitedArray[sPlitedArray.length - 1];
        // console.log(fileName);
        // this.saveImage( data:{source:Image.data,fileName:fileName})

        //  navigation.navigate("Nocropboxletterbox", { img: image });
        //  alert(JSON.stringify(fileName))
        // <Image source={{uri:image}} />
        // console.log(map,image);
        PESDK.openEditor(image.path);
        // console.log(fileName);
      })
      // .then(fileName=>{
      .then(image => {
        navigation.navigate('DpFinal', {img: image});
      });
    // .catch((e) => console.log(e))
  };
  // saveImage(data:{source:string,fileName:string}) {

  // };

  return (
    <View
      style={{
        backgroundColor: '#F5E2F4',
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
          {/* <Header navigation={navigation} title="Dp Creator" /> */}
        </View>
      </LinearGradient>

      <View
        style={{
          width: '100%',
          height: 356,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '10%',
        }}>
        <View
          style={{
            height: 356,
            width: 282,
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 9,
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 47,
          }}>
          <Image
            style={{width: 153, width: 153}}
            source={require('../../assets/pics/dppic.png')}
          />
        </View>

        <View
          style={{
            paddingLeft: 8,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 6,
            height: 64,
            width: 342,
            position: 'absolute',
            bottom: 30,
            elevation: 5,
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Dpdesign />
            <Dpdesign />
            <Dpdesign />
            <Dpdesign />
            <Dpdesign />
            <Dpdesign />
            <Dpdesign />
            <Dpdesign />
            <Dpdesign />
            <Dpdesign />
            <Dpdesign />
          </ScrollView>
        </View>
      </View>

      <Text
        style={{
          marginTop: 66,
          textAlign: 'center',
          color: '#000',
          fontSize: 13,
          fontWeight: '300',
          fontFamily: `${Ifont}`,
        }}>
        Apply frames or stickers for instagram Dp
      </Text>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
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
            width: '70%',
            height: 57,
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
            Select Photo
          </Text>
          {/* PESDK.openEditor(image); */}
        </TouchableOpacity>
                
      </View>
      <TouchableOpacity> 
                <Text> Download </Text> 
                </TouchableOpacity>
      <View>
        <TouchableOpacity
          onPress={() => {
            PESDK.openEditor(require('../../assets/standman.png'));

            PESDK.openEditor(require('../../assets/standman.png'), [
              PESDK.transformTool,
              // PESDK.filterTool,
              // PESDK.focusTool,
              PESDK.adjustTool,
              PESDK.textTool,
              PESDK.stickerTool,
              PESDK.overlayTool,
              PESDK.brushTool,
              PESDK.magic,
            ]).then(imagePath => console.log(imagePath));
          }}>
          <Text>EDIT PIC</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Dpcreateone;
