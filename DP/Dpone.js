import React ,{useState} from 'react';
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
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../src/Components/Header';

import Icontwo from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker, {openPicker} from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

// import RNFetchBlob from 'rn-fetch-blob'
// import { PESDK } from 'react-native-photoeditorsdk';

// PESDK.unlockWithLicense(require("./pesdk_license"));
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
const [image, setImage] = useState(null);
const [uploading, setUploading] = useState(false);
const [transferred, setTransferred] = useState(0);


  const openPicker = () => {
    ImagePicker.openPicker({
        width: 300,
        height:500,
        cropping: true,
        cropperCircleOverlay:true,
        cropperToolbarWidgetColor:"black",
        cropperToolbarColor :'#EFE4FB',
        cropperActiveWidgetColor:"blue",
        freeStyleCropEnabled:true,
        hideBottomControls:true,
        showCropFrame :false,
        cropperToolbarTitle: "Swipe Photo",
        CropGuidelinesColor :"red",
        // aspectRatio:1*3,
        includeBase64: true,
        width: (400),
         height: (400),
        // compressImageMaxWidth:(300),
        // compressImageMaxHeight:(300),
         }).then((image) => {
                              console.log(image.path);
                              navigation.navigate('Dp2', {img : image})
                            //  const  imageUri = image.path;
                              
                            //   setImage(imageUri)
                            })};
                            

      // const submitPost = async () => {
      
      //   const uploadUri = image;
      //   let fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
      //   setUploading(true);

      //   try{
      //     await storage().ref(fileName).putFile(uploadUri);
      //     setUploading(false);
      //     Alert.alert('Image Uploaded')

      //   } catch(e) {
      //     console.log(e);
      //   }
      //   setImage(null);
      // }

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
          <Header navigation={navigation} title="Dp Creator" />
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
            source={require('../Frame/Ell.png')}
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
        
        </TouchableOpacity>
       
        
      </View>
      

    </View>
  );
};

const styles = StyleSheet.create({});

export default Dpcreateone;

// import React, { Component } from 'react'
// import { Text, View, ScrollView } from 'react-native'

// function Squares(props) {
//     var squares = []
//     for (var i = 0; i < props.numRows; i++) {
//         squares.push(<View style={{ height: 50,alignItems:'center', backgroundColor: props.color1 }}><Text>{i}</Text></View>)
//         squares.push(<View style={{ height: 50, backgroundColor: props.color2 }}><Text>{i}</Text></View>)
//     }
//     return squares
// }

// export default class App extends Component {
//     constructor(props) {
//         super(props)
//         this.leftIsScrolling = false
//         this.rigthIsScrolling = false
//     }
//     render() {
//         return (
//             <View
//                 style={{ flex: 1, alignItems: 'center', backgroundColor: 'yellow' }}>
//                 <View style={{ backgroundColor: '#bbb', flexDirection: 'row' }}>
//                 {/* this.leftIsScrolling = false; */}
//                     <ScrollView
//                         scrollEventThrottle={16}
//                         ref={scrollView => { this._leftView = scrollView }}
//                         onScroll={e => {
//                             if (!this.leftIsScrolling) {
//                                 this.rigthIsScrolling = true
//                                 var scrollY = e.nativeEvent.contentOffset.y
//                                 this._rightView.scrollTo({ y: scrollY })
//                             }
//                             this.leftIsScrolling = true
//                         }}>
//                         <Squares numRows={20} color1={"green"} color2={"darkgreen"} />
//                     </ScrollView>

//                     <ScrollView
//                         ref={scrollView => { this._rightView = scrollView }}
//                         scrollEventThrottle={16}
//                         onScroll={e => {
//                             if (!this.rigthIsScrolling) {
//                                 this.leftIsScrolling = true
//                                 var scrollY = e.nativeEvent.contentOffset.y
//                                 this._leftView.scrollTo({ y: scrollY })
//                             }
//                             this.rigthIsScrolling = false
//                         }}>
//                         <Squares numRows={20} color1={"red"} color2={"darkred"} />

//                     </ScrollView>
//                 </View>
//             </View>
//         )
//     }
// }

// <TouchableOpacity 
//       onPress={submitPost}
//       style={{backgroundColor:'black', marginTop:'5%', width:'30%', alignSelf:'center'}}>
//       <Text style={{color:'white', alignSelf:'center'}}>Upload</Text>
//       </TouchableOpacity>
//       <TouchableOpacity 
//       onPress={getImage}
//       style={{backgroundColor:'black', marginTop:'5%', width:'30%', alignSelf:'center'}}>
//       <Text style={{color:'white', alignSelf:'center'}}>Download</Text>
//       </TouchableOpacity>

// import { View, Text, Image } from 'react-native';
// import React from 'react';

// const Dpone = () => {
//   return (
   
//     <View style={{width:'100%', height:'100%',flexDirection:'row'}}>
//     <View style={{width:'50%',height:'50%', backgroundColor:'red'}}>
//      <Image style={{width:'100%',height:'100%',}} source={require('../Pic/boy.png')}/>
//     </View>
//     <View style={{width:'50%',height:'50%', backgroundColor:'red'}}>
//      <Image style={{width:'100%',height:'100%'}} source={require('../Pic/boy.png')}/>
//     </View>
   
//     </View>
//   )
// }

// export default Dpone;