import React, {useRef,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
  Platform,
  ImageBackground,
  FlatList
} from 'react-native';

import {captureRef} from 'react-native-view-shot';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../9Grid/Header';
import Frame from '../src/Components/Frame';
import BigFrames from '../src/Components/BigFrames';
import Badges from '../src/Components/Badges';


const Dp2 = ({route,navigation}) => {
  // create a ref
  const viewRef = useRef();
  const items = route.params;
  // const componentRef = useRef();
  const [userpic, setuserpic] = useState({
    uri: `data:${items.img.mime};base64,${items.img.data}`,
  });
  const [cropped,setCropped] = useState(0);
  const [frames,setFrames] = useState();
  const [big,setBig]= useState();
  const [badg,setBadg] = useState();
  const [Option, setOption] = useState(true);



  const PutFrame1 = () => {
    setFrames(require('../Frame/Ellipse133.png'));
  }
  const PutFrame2 = () => {
    setFrames(require('../Frame/Ellipse134.png'));
  }
  const PutFrame3 = () => {
    setFrames(require('../Frame/Ellipse135.png'));
  }
  const PutFrame4 = () => {
    setFrames(require('../Frame/Ellipse136.png'));
  }
  const PutFrame5 = () => {
    setFrames(require('../Frame/Ellipse137.png'));
  }
  const PutFrame6 = () => {
    setFrames(require('../Frame/Ellipse138.png'));
  }
  const PutFrame7 = () => {
    setFrames(require('../Frame/Ellipse139.png'));
  }
  const PutFrame8 = () => {
    setFrames(require('../Frame/Ellipse140.png'));
  }
  const PutFrame9 = () => {
    setFrames(require('../Frame/Ellipse141.png'));
  }
  const PutFrame10 = () => {
    setFrames(require('../Frame/Ellipse142.png'));
  }
  const PutFrame11 = () => {
    setFrames(require('../Frame/Ellipse143.png'));
  }
  const PutFrame12 = () => {
    setFrames(require('../Frame/Ellipse144.png'));
  }
  const PutFrame13 = () => {
    setFrames(require('../Frame/Ellipse145.png'));
  }
  const PutFrame14 = () => {
    setFrames(require('../Frame/Ellipse146.png'));
  }
  const PutFrame15= () => {
    setFrames(require('../Frame/Ellipse147.png'));
  }
  const PutFrame16= () => {
    setFrames(require('../Frame/Ellipse148.png'));
  }
  const PutFrame17= () => {
    setFrames(require('../Frame/Ellipse151.png'));
  }
  const PutFrame18= () => {
    setFrames(require('../Frame/Ellipse153.png'));
  }
  const PutFrame19= () => {
    setFrames(require('../Frame/Ellipse154.png'));
  }
  const PutFrame20= () => {
    setFrames(require('../Frame/Ellipse156.png'));
  }
  const PutFrame21= () => {
    setFrames(require('../Frame/Ellipse157.png'));
  }
  const PutFrame22= () => {
    setFrames(require('../Frame/Ellipse158.png'));
  }
  const PutFrame23= () => {
    setFrames(require('../Frame/Ellipse159.png'));
  }
  const PutFrame24= () => {
    setFrames(require('../Frame/Ellipse160.png'));
  }
  const PutFrame25= () => {
    setFrames(require('../Frame/Ellipse161.png'));
  }
  const PutFrame26= () => {
    setFrames(require('../Frame/Ellipse162.png'));
  }
  const PutFrame27= () => {
    setFrames(require('../Frame/Ellipse163.png'));
  }
  const PutFrame28= () => {
    setFrames(require('../Frame/Ellipse164.png'));
  }
  const PutFrame29= () => {
    setFrames(require('../Frame/Ellipse165.png'));
  }
  const PutFrame30= () => {
    setFrames(require('../Frame/Ellipse166.png'));
  }
  const PutFrame31= () => {
    setFrames(require('../Frame/Ellipse167.png'));
  }
  const PutFrame32= () => {
    setFrames(require('../Frame/Ellipse168.png'));
  }
  const PutFrame33= () => {
    setFrames(require('../Frame/Ellipse169.png'));
  }
  const PutFrame34= () => {
    setFrames(require('../Frame/Ellipse170.png'));
  }
  const PutFrame35= () => {
    setFrames(require('../Frame/Ellipse171.png'));
  }
  const PutFrame36= () => {
    setFrames(require('../Frame/Ellipse172.png'));
  }
  const PutFrame37= () => {
    setFrames(require('../Frame/Ellipse173.png'));
  }
  const PutFrame38= () => {
    setFrames(require('../Frame/Ellipse174.png'));
  }
  const PutFrame39= () => {
    setFrames(require('../Frame/Ellipse175.png'));
  }
  const PutFrame40= () => {
    setFrames(require('../Frame/Ellipse176.png'));
  }
  const PutFrame41= () => {
    setFrames(require('../Frame/Ellipse177.png'));
  }
  const PutFrame42= () => {
    setFrames(require('../Frame/Ellipse178.png'));
  }
  const PutFrame43= () => {
    setFrames(require('../Frame/Ellipse179.png'));
  }
  const PutFrame44= () => {
    setFrames(require('../Frame/Ellipse180.png'));
  }
  const PutFrame45= () => {
    setFrames(require('../Frame/Ellipse181.png'));
  }
  const PutFrame46= () => {
    setFrames(require('../Frame/Ellipse182.png'));
  }
  const PutFrame47= () => {
    setFrames(require('../Frame/Ellipse183.png'));
  }
  const PutFrame48= () => {
    setFrames(require('../Frame/Ellipse184.png'));
  }
  const PutFrame49= () => {
    setFrames(require('../Frame/Ellipse185.png'));
  }
  const PutFrame50= () => {
    setFrames(require('../Frame/Ellipse186.png'));
  }
  const PutFrame51= () => {
    setFrames(require('../Frame/Ellipse187.png'));
  }
  const PutFrame52= () => {
    setFrames(require('../Frame/Ellipse188.png'));
  }
  const PutFrame53= () => {
    setFrames(require('../Frame/Ellipse189.png'));
  }
  const PutFrame54= () => {
    setFrames(require('../Frame/Ellipse190.png'));
  }
  const PutFrame55= () => {
    setFrames(require('../Frame/Ellipse191.png'));
  }
  const PutFrame56= () => {
    setFrames(require('../Frame/Ellipse192.png'));
  }
  const PutFrame57= () => {
    setFrames(require('../Frame/Ellipse193.png'));
  }
  const PutFrame58= () => {
    setFrames(require('../Frame/Ellipse194.png'));
  }
  const PutFrame59= () => {
    setFrames(require('../Frame/Ellipse195.png'));
  }
  const PutFrame60= () => {
    setFrames(require('../Frame/Ellipse196.png'));
  }
  const PutFrame61= () => {
    setFrames(require('../Frame/Ellipse197.png'));
  }
  const PutFrame62= () => {
    setFrames(require('../Frame/Ellipse198.png'));
  }
  const PutFrame63= () => {
    setFrames(require('../Frame/Ellipse199.png'));
  }
  
  const PB1= () => {
    setBadg(require('../Badges/badge1.png'));
  }
  const PB2= () => {
    setBadg(require('../Badges/badge2.png'));
  }
  const PB3= () => {
    setBadg(require('../Badges/badge3.png'));
  }
  const PB4= () => {
    setBadg(require('../Badges/badge4.png'));
  }
  const PB5= () => {
    setBadg(require('../Badges/badge5.png'));
  }
  const PB6= () => {
    setBadg(require('../Badges/badge6.png'));
  }
  const PB7= () => {
    setBadg(require('../Badges/badge7.png'));
  }
  const PB8= () => {
    setBadg(require('../Badges/badge8.png'));
  }
  const PB9= () => {
    setBadg(require('../Badges/badge9.png'));
  }
  const PutFrame64= () => {
    setFrames(require('../Frame/Ellipse200.png'));
  }
  
  const NoFrame= () => {
    setFrames();
    setBadg();
  }


      const cropMe1 = () => {
        setCropped(215);
      };

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
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <LinearGradient
        colors={['#ffffff', '#ECDCF7']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
         
          
        <View style={{borderWidth:1.5, borderColor:'#F5E2F4'}}>
          <Header navigation={navigation} title="Dp Creator" />
        </View>
      
      <View style={{width:414, height:415,justifyContent:'center',alignItems:'center', marginTop:'8%'}}>
            <View style={{justifyContent:'center',
            alignItems:'center',
                width:414,
                height: 415,
                backgroundColor: 'grey',
                borderRadius:cropped}} ref={viewRef}>
           
              <Image source={userpic} resizeMode="cover" style={{width: 414, height: 415,
            borderRadius:cropped}}/>
              
             
              <TouchableOpacity 
              onPress={cropMe1}
      style={{width:414,height:415 ,alignSelf:'center',position:'absolute',
     }}>
     <Image source={frames} style={{width:414,height:415}}/>
     <Image source={badg} style={{width:100,height:100,position:'absolute', 
            marginLeft:250, marginTop:315}}/>
        </TouchableOpacity> 
        
            </View>
            </View>
            
          
             
            <TouchableOpacity style={{ position:'absolute',
            backgroundColor: '#3672E9',marginLeft:'80%',width:30,marginTop:'5%',
             borderRadius: 5,paddingTop:5,paddingBottom:5
          }} onPress={downloadImage}>
              <Text style={{color:'white', fontSize:15,alignSelf:'center'}}>Done</Text>
            </TouchableOpacity>


  {Option == true ? 
           <Frame Put1={PutFrame1} Put={NoFrame}
                  Put2={PutFrame2} Put3={PutFrame3} Put4={PutFrame4} Put5={PutFrame5} 
                  Put6={PutFrame6} Put7={PutFrame7} Put8={PutFrame8} Put9={PutFrame9}
                  Put10={PutFrame10} Put11={PutFrame11} Put12={PutFrame12} Put13={PutFrame13}
                  Put14={PutFrame14} Put15={PutFrame15} Put16={PutFrame16} Put17={PutFrame17}
                  Put18={PutFrame18} Put19={PutFrame19} Put20={PutFrame20} Put21={PutFrame21}
                  Put22={PutFrame22} Put23={PutFrame23} Put24={PutFrame24} Put25={PutFrame25}
                  Put26={PutFrame26} Put27={PutFrame27} Put28={PutFrame28} Put29={PutFrame29}
                  Put30={PutFrame30} Put31={PutFrame31} Put32={PutFrame32} Put33={PutFrame33}
                  Put34={PutFrame34} Put35={PutFrame35} Put36={PutFrame36} Put37={PutFrame37}
                  Put38={PutFrame38} Put39={PutFrame39} Put40={PutFrame40} Put41={PutFrame41}
                  Put42={PutFrame42} Put43={PutFrame43} Put44={PutFrame44} Put45={PutFrame45}
                  Put46={PutFrame46} Put47={PutFrame47} Put48={PutFrame48} Put49={PutFrame49}
                  Put50={PutFrame50} Put51={PutFrame51} Put52={PutFrame52} Put53={PutFrame53}
                  Put54={PutFrame54} Put55={PutFrame55} Put56={PutFrame56} Put57={PutFrame57}
                  Put58={PutFrame58} Put59={PutFrame59} Put60={PutFrame60} Put61={PutFrame61}
                  Put63={PutFrame63} Put62={PutFrame62} Put64={PutFrame64}
                   />
                   :
            <Badges Put1={PB1} Put={NoFrame}
                   Put2={PB2} Put3={PB3} Put4={PB4} Put5={PB5} 
                   Put6={PB6} Put7={PB7} Put8={PB8} Put9={PB9}/>
                 
  }

      {/* nichewala Frame */}

            <View style={{flexDirection: 'row', justifyContent: 'space-around', 
                          marginTop:'5%',width:'100%'}}>
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

     

          </ScrollView>
        </LinearGradient>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: '#F5E2F4',
    height:'100%',
    
  },

  text: {
    textAlign: 'center',
  },
  row: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '75%',
  },
  button: {
   
   
   
   
   
  },
});

export default Dp2;


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




// <FlatList
//               data={BigFrames}
//               horizontal={true}
//               renderItem={({ item }) => {
//                 return (
//                       <ScrollView horizontal={true} style={{backgroundColor:'white'}}>
//                        <TouchableOpacity onPress={item.Put}>
//                         <Image style={{width:58, height:58, marginLeft:8}}
//                                 source={item.image} />
//                         </TouchableOpacity>
//                       </ScrollView>
//                         )}}/>
