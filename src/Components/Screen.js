import React ,{useState } from 'react';
import { ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  Modal,
  ImageBackground,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback, } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import X from 'react-native-vector-icons/Feather';
import Y from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Left from 'react-native-vector-icons/AntDesign';

import ImagePicker ,{openCamera, openPicker} from 'react-native-image-crop-picker';



const Screen = (props) => {
  const {navigation,closeCallback,closeTouch}=props;
  const [pop, setpop] = useState([]);  
 
// const Screen = (props) => {
 
  // const closeCallback={() => setPop(false)};
  // const closeTouch={() => setPop(false)};


 
  const [uri, setUri] = useState(props.source?.uri || undefined);
  const pickPicture = () => {
    

    ImagePicker.openCamera({
      // width: 300,
      // height: 300,
      // cropping: true,
    }).then((image) => {
      setUri(image.path);
      props.onChange?.(image);
    });
  };

  const openPicker = () => {
  ImagePicker.openPicker({
    // width: 300,
    // height: 300,
    // cropping: true,
  }).then((image) => {
    setUri(image.path);
    props.onChange?.(image);
  });
  };

 

    // const Ifont = 'Poplin';
    
    return (
        <View>
             {/* <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16, marginBottom: 13 }}> */}
             <View style={[styles.row]}>
        <TouchableOpacity >
          <View style={{
           
            // borderColor: `${props.bc}`,
            // top:5,
            height: 110,
            width: 110,
            borderRadius: 80,
           
            // alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: `${props.bg}`,
          }}>
            <AntDesign name="plus" size={30} color="black" style={{position:'absolute',alignSelf:'center'}}/>
           <Text style={{ color: 'black', fontSize: 16,top:130,
            width: 400}}>
            {props.title}
            </Text>
            <TouchableOpacity 
            onPress={openPicker}
            // onPress={() => Alert.alert(
            //   'Select Option',
            //   '.',
            //   [
            //     {text: 'Gallery', onPress: openPicker},
            //     {text: 'Camera', onPress: pickPicture},
            //     {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                
          
            //   ],
            //   { cancelable: true }
            // )}
            >
            <Image
            style={styles.avatar}
            {...props}
            source={uri ? { uri } : props.source}
          />
      </TouchableOpacity>
          </View>
          </TouchableOpacity>

        {/* </View> */}
                    {/* <TouchableOpacity onPress={() => props.navigation.goBack()} style={{position:'absolute', top:8,  left:22,  }}>
                  
                    </TouchableOpacity>                        
                    <Text style={[{fontFamily: `${ Ifont }`}, styles.head]}>{props.title}</Text> */}
                </View>
                {/* <View style={{borderWidth:0.5,borderColor:'#EBEBEB'}}> */}

                {/* </View> */}

              
        </View>
    );
}

const styles = StyleSheet.create({
    head: {
        color: 'black',
        fontStyle: 'normal',
        
        // fontFamily:"RammettoOne-Regular",
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 36,

    },
    avatar: {
    
      height: 110,
      width: 110,
    justifyContent:'center',
      borderRadius: 80,
      marginBottom:20,
      alignContent:'center',
      alignSelf:'center',
    //  marginLeft:15
    },
  
    row: {
     
      
    },
    modalcontainer: {
      // flex: 1,
      
      // flexDirection:'column',
  right:10,
      alignItems: 'center',
    },
    modalview: {
    
      height:70,
      width:320,
      // justifyContent:'space-evenly',
     
      backgroundColor: 'white',
      borderColor: '#fff',
      
     
      borderRadius: 20,
      // alignSelf: 'flex-end',
      // position: 'absolute',
      top: 290
    },
})

export default Screen;
