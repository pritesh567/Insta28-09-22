// import React, {useState} from 'react';
// import {
//   View,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Dimensions,
//   ImageBackground,
//   Image,
//   ScrollView,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Header from '../9Grid/Header';
// // import Icon from 'react-native-vector-icons/AntDesign';
// // import Icontwo from 'react-native-vector-icons/Feather';
// import LinearGradient from 'react-native-linear-gradient';
// // import MaskedView from '@react-native-community/masked-view';

// import borderframe from './index';
// import Allbadge from './badge';
// // const [Option, setOption] = useState(true);
// // const [Currframe, setCurrframe] = useState(true);
// // const [Currbadge, setCurrbadge] = useState(true);
// // const [Option, setOption] = useState(true);

// const Dpbadge = props => {
//   return (
//     <>
//       <TouchableOpacity
//         onPress={() => props.setCurrbadge(props.id)}
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginLeft: 12,
//           borderRadius: 200,
//           height: 58,
//           width: 58,
//         }}>
//         <View
//           style={{
//             padding: 3,
//             position: 'absolute',
//             top: 3,
//             left: 3,
//             height: 52,
//             width: 52,
//             borderRadius: 200,
//           }}>
//           <Image
//             style={{height: '100%', width: '100%', borderRadius: 200}}
//             source={props.badgepic}
//           />
//         </View>

//         <Image
//           style={{height: 28, width: 58, borderRadius: 200}}
//           source={Mypic}
//         />
//       </TouchableOpacity>
//     </>
//   );
// };

// const Dpborder = props => {
//   return (
//     <>
//       <TouchableOpacity
//         onPress={() => props.setCurrframe(props.id)}
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginLeft: 12,
//           borderRadius: 200,
//           height: 58,
//           width: 58,
//         }}>
//         {props.Currframe == props.id ? (
//           <Image
//             style={{
//               position: 'absolute',
//               top: 2,
//               left: 2,
//               height: 54,
//               width: 54,
//               borderRadius: 200,
//             }}
//             source={props.userpic}
//           />
//         ) : null}
//         <Image
//           style={{height: 58, width: 58, borderRadius: 200}}
//           source={props.bframe}
//         />
//       </TouchableOpacity>
//     </>
//   );
// };

// const DpTwo = ({props, route, navigation}) => {
//   const items = route.params;

//   const [Mypic, setMypic] = useState({
//     uri: `data:${items.img.mime};base64,${items.img.data}`,
//   });

//   const [Option, setOption] = useState();
//   const [index, setIndex] = useState(0);

//   // let index =0;
//   return (
//     <View
//       style={{
//         backgroundColor: '#F5E2F4',
//         height: Dimensions.get('window').height,
//         borderWidth: 1,
//         borderColor: '#F3E6FA',
//         borderRadius: 35,
//       }}>
//       <ScrollView>
//         <LinearGradient
//           colors={['#ffffff', '#ECDCF7']}
//           start={{x: 0, y: 0}}
//           end={{x: 1, y: 0}}>
//           <View style={styles.card}>
//             <Header navigation={navigation} title="Dp Creator" />
//           </View>
//         </LinearGradient>

//         <View
//           style={{
//             width: '100%',
//             height: '55%',
//             flexDirection: 'row',
//             justifyContent: 'center',
//             marginTop: '5%',
//           }}>
//           <Image source={Mypic} style={{height: 380, width: 300, zIndex: 0}} />
//         </View>

//         <View
//           style={{
//             width: '80%',
//             height: '40%',
//             margin: 33,
//             marginTop: '34%',
//             flexDirection: 'row',
//             borderRadius: 205,
//             borderWidth: 5,
//             zIndex: 1,
//             position: 'absolute',
//           }}></View>

//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             backgroundColor: '#F3E6FA',
//             borderRadius: 19,
//             height: 86,
//             width: '100%',
//             marginTop: 30,
//             marginBottom: 18,
//             elevation: 5,
//           }}>
//           {Option == true ? (
//             <ScrollView
//               horizontal={true}
//               showsHorizontalScrollIndicator={false}>
//               <TouchableOpacity
//                 onPress={() => setCurrframe(0)}
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   marginLeft: 12,
//                   borderRadius: 200,
//                   height: 58,
//                   width: 58,
//                   borderWidth: 3,
//                   borderColor: '#000',
//                 }}>
//                 <View
//                   style={{
//                     position: 'absolute',
//                     transform: [{rotate: '135deg'}],
//                     top: 24,
//                     width: '105%',
//                     height: 1,
//                     borderBottomColor: 'black',
//                     borderBottomWidth: 3,
//                   }}
//                 />
//               </TouchableOpacity>

//               {borderframe.map((item, index) => {
//                 return (
//                   <>
//                     <Dpborder
//                       key={index}
//                       id={index + 1}
//                       Currframe={Currframe}
//                       setCurrframe={e => {
//                         setCurrframe(e);
//                       }}
//                       userpic={userpic}
//                       bframe={item}
//                     />
//                   </>
//                 );
//               })}
//             </ScrollView>
//           ) : (
//             <ScrollView
//               horizontal={true}
//               showsHorizontalScrollIndicator={false}>
//               <TouchableOpacity
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   marginLeft: 12,
//                   borderRadius: 200,
//                   height: 58,
//                   width: 58,
//                   borderWidth: 3,
//                   borderColor: '#000',
//                 }}>
//                 <View
//                   style={{
//                     position: 'absolute',
//                     transform: [{rotate: '135deg'}],
//                     top: 24,
//                     width: '105%',
//                     height: 1,
//                     borderBottomColor: 'black',
//                     borderBottomWidth: 3,
//                   }}
//                 />
//               </TouchableOpacity>

//             {Allbadge.map((item, index) => {
//               return (
//                 <>
//                   <Dpbadge
//                     key={index}
//                     id={index + 1}
//                     Currbadge={Currbadge}
//                     setCurrbadge={e => {
//                       setCurrbadge(e);
//                     }}
//                     badgepic={item}
//                   />
//                 </>
//               );
//             })}
//             </ScrollView>
//           )}
//         </View>

//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <TouchableOpacity
//             onPress={() => setOption(true)}
//             style={{width: '45%'}}>
//             <Framebtn Option={Option} />
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={() => setOption(false)}
//             style={{width: '45%'}}>
//             <Badgebtn Option={Option} />
//           </TouchableOpacity>
//         </View>

//         {/* <Button /> */}
//         {/* <AnotherButton  /> */}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({

// });
// export default DpTwo;

// const Framebtn = props => {
//   if (props.Option == true) {
//     return (
//       <>
//         <View
//           style={{
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <LinearGradient
//             colors={['#A83882', '#DA3150', '#FA5539']}
//             start={{x: 0.0, y: 1.0}}
//             end={{x: 1.0, y: 0.0}}
//             style={{
//               height: 36,
//               width: 36,
//               alignItems: 'center',
//               justifyContent: 'center',
//               borderRadius: 82 / 2,
//             }}>
//             <View
//               style={{
//                 margin: 4,
//                 padding: 2.8,
//                 backgroundColor: '#F3EAFD',
//                 borderRadius: 82 / 2,
//               }}>
//               <LinearGradient
//                 colors={['#A83882', '#DA3150', '#FA5539']}
//                 start={{x: 0.0, y: 1.0}}
//                 end={{x: 1.0, y: 0.0}}
//                 style={{
//                   height: 27,
//                   width: 27,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   borderRadius: 82 / 2,
//                 }}></LinearGradient>
//             </View>
//           </LinearGradient>

//           <Image style={{marginTop: 10}} source={require('../Frame/Ell.png')} />
//         </View>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <View
//           style={{
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <View
//             style={{
//               backgroundColor: '#797979',
//               height: 36,
//               width: 36,
//               alignItems: 'center',
//               justifyContent: 'center',
//               borderRadius: 82 / 2,
//             }}>
//             <View
//               style={{
//                 margin: 4,
//                 padding: 2.8,
//                 backgroundColor: '#F3EAFD',
//                 borderRadius: 82 / 2,
//               }}>
//               <View
//                 style={{
//                   backgroundColor: '#797979',
//                   height: 27,
//                   width: 27,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   borderRadius: 82 / 2,
//                 }}></View>
//             </View>
//           </View>

//           <Text style={{textAlign: 'center', color: '#797979', fontSize: 13}}>
//             Frames
//           </Text>
//         </View>
//       </>
//     );
//   }
// };

// const Badgebtn = props => {
//   if (props.Option == true) {
//     return (
//       <>
//         <View
//           style={{
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <View
//             style={{
//               height: 36,
//               width: 36,
//               alignItems: 'center',
//               justifyContent: 'center',
//               borderRadius: 82 / 2,
//               borderWidth: 1.5,
//               borderColor: '#797979',
//               borderRadius: 200,
//             }}>
//             <Image
//               style={{height: 36, width: 36}}
//               source={require('../Badges/badge1.png')}
//             />
//           </View>

//           <Text style={{textAlign: 'center', color: '#797979', fontSize: 13}}>
//             Badges & Emojis
//           </Text>
//         </View>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <View
//           style={{
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <LinearGradient
//             colors={['#A83882', '#DA3150', '#FA5539']}
//             start={{x: 0.0, y: 1.0}}
//             end={{x: 1.0, y: 0.0}}
//             style={{
//               height: 36,
//               width: 36,
//               alignItems: 'center',
//               justifyContent: 'center',
//               borderRadius: 82 / 2,
//             }}>
//             <View
//               style={{
//                 margin: 4,
//                 padding: 2.8,
//                 backgroundColor: '#F3EAFD',
//                 borderRadius: 82 / 2,
//               }}>
//               <LinearGradient
//                 colors={['#A83882', '#DA3150', '#FA5539']}
//                 start={{x: 0.0, y: 1.0}}
//                 end={{x: 1.0, y: 0.0}}
//                 style={{
//                   height: 27,
//                   width: 27,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   borderRadius: 82 / 2,
//                 }}>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     backgroundColor: '#6C99F6',
//                     height: 23,
//                     width: 23,
//                     borderRadius: 82 / 2,
//                   }}>
//                   <Image
//                     style={{height: 15, width: 15}}
//                     source={require('../Badges/badge1.png')}
//                   />
//                 </View>
//               </LinearGradient>
//             </View>
//           </LinearGradient>

//           {/* <Image style={{marginTop: 10}} source={require('../Badges/badge1.png')} /> */}
//         </View>
//       </>
//     );
//   }
// };

import React, {useRef, useState} from 'react';
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
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import {captureRef} from 'react-native-view-shot';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../9Grid/Header';
import { exportComponentAsJPEG} from 'react-component-export-image';
import download from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
// import MaskedView from '@react-native-community/masked-view';

import borderframe from './index';
import Allbadge from './badge';

// import Download from '../9Grid/Download';
// import RNFetchBlob from 'rn-fetch-blob';

const Remote = () => {
  props.setCurrbadge(props.id);
};

const Dpbadge = props => {
  return (
    // <ScrollView>
    <>
      <TouchableOpacity
        onPress={Remote}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 12,
          borderRadius: 200,
          height: 58,
          width: 58,
          // top:60
        }}>
        <View
          style={{
            padding: 3,
            position: 'absolute',
            top: 3,
            left: 3,
            height: 52,
            width: 52,
            borderRadius: 200,
          }}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={props.badgepic}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

// lfjhnldffhlfdlflfglnfdl
const Dpborderon = props => {
  return (
    <>
      <TouchableOpacity
        onPress={() => props.setCurrframe(props.id)}
        style={{
          flexDirection: 'row',
          
          marginLeft: 12,
          borderRadius: 20,
          height: 350,
          width: 350,
          
        }}>
        {props.Currframe == props.id ? (
          <Image
            style={{
              position: 'absolute',
              top: 2,
              left: 2,
              height: 305,
              width: 305,
              top: 30,
              borderRadius: 200,
              // borderWidth:2
            }}
            source={props.userpic}
          />
        ) : null}
        <Image
          style={{height: 310, width: 310, borderRadius: 20, top: 30}}
          source={props.bframe}
        />
      </TouchableOpacity>
    </>
  );
};
// hfhdsdhfjfndsjdfbdbfjdbfbdbfbsdbfsd?

const Dpborder = props => {
  return (
    <>
      <TouchableOpacity
        onPress={() => props.setCurrframe(props.id)}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 12,
          borderRadius: 200,
          height: 58,
          width: 58,
        }}>
        {props.Currframe == props.id ? (
          <Image
            style={{
              position: 'absolute',
              top: 2,
              left: 2,
              height: 54,
              width: 54,
              borderRadius: 200,
            }}
            source={props.userpic}
          />
        ) : null}
        <Image
          style={{height: 58, width: 58, borderRadius: 200}}
          source={props.bframe}
        />
      </TouchableOpacity>
    </>
  );
};



const DpTwo = ({route, navigation}) => {
  const viewRef = useRef();
  const items = route.params;
  // const componentRef = useRef();
  const [userpic, setuserpic] = useState({
    uri: `data:${items.img.mime};base64,${items.img.data}`,
  });

  const [Currframe, setCurrframe] = useState(0);
  const [Currbadge, setCurrbadge] = useState(0);
  const [Option, setOption] = useState(true);

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

  const downloadImage = async () => {
    try {
      // react-native-view-shot caputures component
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 1.0,
      });

      if (Platform.OS === 'android') {
        const granted = await getPermissionAndroid();
        
        if (!granted) {
          return Alert.alert('Storage Permission Not Granted');
        }
      }

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

  // const userpic = {Mypic};
  // const REMOTE_IMAGE_PATH =
  //  'https://firebasestorage.googleapis.com/v0/b/insta-d76ce.appspot.com/o/d54085ba-e8ba-4693-8915-6e3cb759c701.jpg?alt=media&token=ae88a953-8142-4ef7-a7ee-2cd332d854cc';
  // const checkPermission = async () => {
  //   // Function to check the platform
  //   // If iOS then start downloading
  //   // If Android then ask for permission

  //   if (Platform.OS === 'ios') {
  //     downloadImage();
  //   } else {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //         {
  //           title: 'Storage Permission Required',
  //           message: 'App needs access to your storage to download Photos',
  //         },
  //       );
  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         // Once user grant the permission start downloading
  //         console.log('Storage Permission Granted.');
  //         downloadImage();
  //       } else {
  //         // If permission denied then show alert
  //         alert('Storage Permission Not Granted');
  //       }
  //     } catch (err) {
  //       // To handle permission related exception
  //       console.warn(err);
  //     }
  //   }
  // };

  // const downloadImage = () => {
  //   // Main function to download the image

  //   // To add the time suffix in filename
  //   let date = new Date();
  //   // Image URL which we want to download
  //   let image_URL = REMOTE_IMAGE_PATH;
  //   // Getting the extention of the file
  //   let ext = getExtention(image_URL);
  //   ext = '.' + ext[0];
  //   // Get config and fs from RNFetchBlob
  //   // config: To pass the downloading related options
  //   // fs: Directory path where we want our image to download
  //   const {config, fs} = RNFetchBlob;
  //   let PictureDir = fs.dirs.PictureDir;
  //   let options = {
  //     fileCache: true,
  //     addAndroidDownloads: {
  //       // Related to the Android only
  //       useDownloadManager: true,
  //       notification: true,
  //       path:
  //         PictureDir +
  //         '/image_' +
  //         Math.floor(date.getTime() + date.getSeconds() / 2) +
  //         ext,
  //       description: 'Image',
  //     },
  //   };
  //   config(options)
  //     .fetch('GET', image_URL)
  //     .then(res => {
  //       // Showing alert after successful downloading
  //       console.log('res -> ', JSON.stringify(res));
  //       alert('Image Downloaded Successfully.');
  //     });
  // };

  // const getExtention = filename => {
  //   // To get the file extension
  //   return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  // };

  return (
    <View 
      style={{
        backgroundColor: '#F5E2F4',
        height: Dimensions.get('window').height,
        borderWidth: 1,
        borderColor: '#F3E6FA',
      }}>
      <LinearGradient
        colors={['#ffffff', '#ECDCF7']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={styles.card}>
          <Header navigation={navigation} title="Dp Creator" />
        </View>
      </LinearGradient>

      <View 
        style={{
          // width: '100%',
          // height: 356,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '5%',
        }}>
        {/* image background white space */}
        <View
          style={{
            // height: 400,
            // width: '100%',
            backgroundColor: '#fff',
            elevation: 5,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 400, width: 335, position: 'absolute'}}
            source={userpic}
          />
          {/* <View style={{borderWidth:5,borderRadius:150,borderColor:'red',position:'absolute',height:300,width:300,alignSelf:'center'}}></View> */}

          {/* {Allbadge.map((item, index) => {
              return (
                <>
                  <Dpbadge
                    key={index}
                    id={index + 1}
                    Currbadge={Currbadge}
                    setCurrbadge={e => {
                      setCurrbadge(e);
                    }}
                    badgepic={Currbadge}
                  />
                </>
              );
            })} */}
        </View>
      </View>
      {/* hfndsjfjdjfndsnfndsn */}
      <View    
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // backgroundColor: '#F3E6FA',
          // borderRadius: 6,
          height: 350,
          width: '100%',
          // backgroundColor:'red'
          // marginTop: 60,
          // marginBottom: 18,
          // elevation: 5,
        }}>
        {Option == true ? (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
            <TouchableOpacity
              onPress={() => setCurrframe(0)}
              // style={{
              //   flexDirection: 'row',
              //   justifyContent: 'center',
              //   alignItems: 'center',
              //   marginLeft: 12,
              //   borderRadius: 200,
              //   height: 58,
              //   width: 58,
              //   borderWidth: 3,
              //   borderColor: '#000',
              // }}>
            >
              {/* <View
                 style={{
                  position: 'absolute',
                  transform: [{rotate: '135deg'}],
                  top: 24,
                  width: '105%',
                  height: 1,
                  borderBottomColor: 'black',
                  borderBottomWidth: 3,
                }}
              /> */}
            </TouchableOpacity>
            {borderframe.map((item, index) => {
              return (
                <>
            
                          <Dpborderon
                          key={index}
                          id={index + 1}
                          Currframe={Currframe}
                          setCurrframe={e => {
                            setCurrframe(e);
                          }}
                          userpic={userpic}
                          bframe={item}
                        />
              
          
                  
                </>
              );
            })}
          
          </ScrollView>
        ) : (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                // marginLeft: 12,
                // borderRadius: 200,
                height: 350,
                width: 350,
                // borderWidth: 3,
                // borderColor: '#000',
              }}>
              <View />
            </TouchableOpacity>
            {/* {Allbadge.map((item, index) => {
              return (
                <>
                  <Dpbadge
                    key={index}
                    id={index + 1}
                    Currbadge={Currbadge}
                    setCurrbadge={e => {
                      setCurrbadge(e);
                    }}
                    badgepic={item}
                  />
                </>
              );
            })} */}
          </ScrollView>
        )}
      </View>
      {/* hfidfdfidsfdshgfgdgfids */}

      {/* nichwala Frame */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#F3E6FA',
          borderRadius: 6,
          height: 86,
          width: '100%',
          marginTop: 60,
          marginBottom: 18,
          elevation: 5,
        }}>
        {Option == true ? (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => setCurrframe(0)}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 12,
                borderRadius: 200,
                height: 58,
                width: 58,
                // marginTop:60,
                borderWidth: 3,
                borderColor: '#000',
              }}>
              <View
                style={{
                  position: 'absolute',
                  transform: [{rotate: '135deg'}],
                  // top: 24,
                  width: '105%',
                  height: 1,
                  borderBottomColor: 'black',
                  borderBottomWidth: 3,
                }}
              />
            </TouchableOpacity>

            {borderframe.map((item, index) => {
              return (
                <>
                  <Dpborder
                    key={index}
                    id={index + 1}
                    Currframe={Currframe}
                    setCurrframe={e => {
                      setCurrframe(e);
                    }}
                    userpic={userpic}
                    bframe={item}
                  />
                </>
              );
            })}
          </ScrollView>
        ) : (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 12,
                borderRadius: 200,
                height: 58,
                width: 58,
                borderWidth: 3,
                borderColor: '#000',
              }}>
              <View
                style={{
                  position: 'absolute',
                  transform: [{rotate: '135deg'}],
                  top: 24,
                  width: '105%',
                  height: 1,
                  borderBottomColor: 'black',
                  borderBottomWidth: 3,
                }}
              />
            </TouchableOpacity>

            {Allbadge.map((item, index) => {
              return (
                <>
                  <Dpbadge
                    key={index}
                    id={index + 1}
                    Currbadge={Currbadge}
                    setCurrbadge={e => {
                      setCurrbadge(e);
                    }}
                    badgepic={item}
                  />
                </>
              );
            })}
          </ScrollView>
        )}
      </View>

      {/* nichewala Frame */}

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity
          onPress={() => setOption(true)}
          style={{width: '45%'}}>
          <Framebtn Option={Option} />
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => setOption(false)}
          style={{width: '45%'}}>
          <Badgebtn Option={Option} />
        </TouchableOpacity>

        
      </View>

      <TouchableOpacity 
      onPress={downloadImage}
      style={{backgroundColor: '#ad4fcc',
                position:'absolute',
               
                marginTop:'2%',
                marginLeft:'70%',
                              padding: 5,
                        
                              width:'5%',
                              borderRadius: 10}}>
                <Text style={{color:'white', fontSize:15, 
                fontWeight:'bold',alignSelf:'center'}}>Save</Text>
              </TouchableOpacity>
    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default DpTwo;

const Framebtn = props => {
  if (props.Option == true) {
    return (
      <>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <LinearGradient
            colors={['#A83882', '#DA3150', '#FA5539']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 0.0}}
            style={{
              height: 36,
              width: 36,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 82 / 2,
            }}>
            <View
              style={{
                margin: 4,
                padding: 2.8,
                backgroundColor: '#F3EAFD',
                borderRadius: 82 / 2,
              }}>
              <LinearGradient
                colors={['#A83882', '#DA3150', '#FA5539']}
                start={{x: 0.0, y: 1.0}}
                end={{x: 1.0, y: 0.0}}
                style={{
                  height: 27,
                  width: 27,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 82 / 2,
                }}></LinearGradient>
            </View>
          </LinearGradient>
          <Text style={{color: '#DA3150'}}>Frames</Text>
        </View>
      </>
    );
  } 
  else {
    return (
      <>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
          }}>
          <View
            style={{
              backgroundColor: '#797979',
              height: 36,
              width: 36,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 82 / 2,
            }}>
            <View
              style={{
                margin: 4,
                padding: 2.8,
                backgroundColor: '#F3EAFD',
                borderRadius: 82 / 2,
              }}>
              <View
                style={{
                  backgroundColor: '#797979',
                  height: 27,
                  width: 27,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 82 / 2,
                }}></View>
            </View>
          </View>

          <Text style={{textAlign: 'center', color: '#797979', fontSize: 13}}>
            Frames
          </Text>
          
        </View>
      </>
    );
  }
};

const Badgebtn = props => {
  if (props.Option == true) {
    return (
      <>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 36,
              width: 36,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 82 / 2,
              borderWidth: 1.5,
              borderColor: '#797979',
              borderRadius: 200,
            }}>
            <Image
              style={{height: 36, width: 36}}
              source={require('../Badges/badge1.png')}
            />
          </View>
        </View>
        <Text style={{textAlign: 'center', color: '#797979', fontSize: 13}}>
          Badges & Emojis
        </Text>
      </>
    );
  } else {
    return (
      <>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <LinearGradient
            colors={['#A83882', '#DA3150', '#FA5539']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 0.0}}
            style={{
              height: 36,
              width: 36,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 82 / 2,
            }}>
            <View
              style={{
                margin: 4,
                padding: 2.8,
                backgroundColor: '#F3EAFD',
                borderRadius: 82 / 2,
              }}>
              <LinearGradient
                colors={['#A83882', '#DA3150', '#FA5539']}
                start={{x: 0.0, y: 1.0}}
                end={{x: 1.0, y: 0.0}}
                style={{
                  height: 27,
                  width: 27,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 82 / 2,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#6C99F6',
                    height: 23,
                    width: 23,
                    borderRadius: 82 / 2,
                  }}>
                  <Image
                    style={{height: 15, width: 15}}
                    source={require('../Badges/badge1.png')}
                  />
                </View>
              </LinearGradient>
            </View>
          </LinearGradient>
        </View>
      </>
    );
  }
};
