// import {Text, View, Image, StyleSheet,ScrollView} from 'react-native';
// import React, {Component, useState} from 'react';
// import { StaticCollage } from 'react-native-images-collage';
// const Profile = ({props, route, navigation}) => {
//   let items = route.params;
//   const source = [
//     (`data:${items.img.mime};base64,${items.img.data}`),
    //  (`data:${items.img.mime};base64,${items.img.data}`),
  // ];
  // setprofilePicture(source);
  // const [profilePicture, setprofilePicture] = useState ();

  //   const { profile } = route.params;    // const [profilePicture, setprofilePicture] = useState({uri: `data:${items.img.mime};base64,${items.img.data}`});

  // var profilePicture = JSON.stringify(profile);
  // console.log(profilePicture)
  // return (
  //   <View style={{flex: 0}}>
        {/* <Text style={[]}>Your Profiledklfhldfdfhdfh</Text>
        <Text style={[]}>Enter your name and add a profile picture.</Text> */}

//       <ScrollView style={{width:320,top:10,margin:2}} horizontal={true}>
//             <View style={{width:5,top:10,margin:2,width:10,height:500,marginRight:1000}}> 
//               <StaticCollage style={{ height: "100%", width: "90%" }}
//           width={320}
//      height={300}
//      images={source}
     
//  matrix={ [1,1,9] } /> 

//        </View>
//        </ScrollView>

//     </View>
//   );
// };

// const style = StyleSheet.create({
//   ridesFriends: {
//     // paddingTop: 10,
//     alignItems: 'center',
//     flexDirection: 'column',
//     justifyContent: 'space-evenly',
//     width: '100%',
//     marginBottom: 20,
//     position: 'absolute',
//   },
//   numbers: {
//     fontSize: 30,
//     color: '#31C283',
//     fontWeight: 'bold',
//   },
//   verticleLine: {
//     height:400 ,
//     width: 3,
//     backgroundColor: 'white',
//   },
// });
// export default Profile;


import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
// import {DynamicCollage, StaticCollage} from 'react-native-images-collage';
import Header from '../9Grid/Header';
import LinearGradient from 'react-native-linear-gradient';

const Swipe2 = ({props, route,navigation}) => {
  
  const img = route.params.img;
  const items =route.params;
  //   const sourcethree = [
  //     (`data:${items.img.mime};base64,${items.img.data}`),
  //     (`data:${items.img.mime};base64,${items.img.data}`),
  //     (`data:${items.img.mime};base64,${items.img.data}`),
  //   ];
  const three= [  
    (`data:${items.img.mime};base64,${items.img.data}`),  
    (`data:${items.img.mime};base64,${items.img.data}`),
    (`data:${items.img.mime};base64,${items.img.data}`), 
     ]

  const collageRef = useRef(null);
  
  return (
    <View
      style={{
        backgroundColor: '#E4D9FB',
        height: Dimensions.get('window').height,
      }}>
      <LinearGradient
        colors={['#ffffff', '#E4D5F9']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={style.card}>
          <Header navigation={navigation} title="Swipe photo 2" />
        </View>
      </LinearGradient>

      {/* <ScrollView> */}
        {/* <Header navigation={navigation} title="9 Grid" /> */}
         {/* <ScrollView style={{width:320,top:10,margin:2}}> */}
            <View style={{width:5,top:10,margin:2,width:10,height:500,marginRight:1000}}> 
              <StaticCollage style={{width:50,top:10,margin:2,width:10,height:500,marginRight:1000}}
          width={320}
     height={400}
     images={img}
     
 matrix={ [1,1] } /> 

       </View>
       {/* </ScrollView> */}

        <View style={style.buttons}>
          <TouchableOpacity
  // onPress= {(image => {  navigation.navigate ("Sample" ,{img: one}); })}
            style={style.but}>
            <Text style={style.butext}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => navigation.goBack()}
            style={style.but}>
            <Text style={style.butext}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            //  onPress= {() => navigation.push('Sample3')}
             onPress= {(image => {  navigation.navigate ("Sample3" ,{img: img}); })}
            style={style.but}>
            <Text style={style.butext}>3</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            // flex:2,
            backgroundColor: '#3672E9',
            width: 200,
            height: 50,
            left:60,
            borderRadius: 15,
            bottom:45,
            alignItems: 'center',
            justifyContent: 'center',
        
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              borderRadius: 15,
            
            }}>
            <Text
              style={{
                color: '#FFF',
                fontSize: 18,
              }}>
              Apply
            </Text>
          </TouchableOpacity>
        </View>
      {/* </ScrollView> */}
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    width: 85,
    height: 25,
    // alignContent:'center',
    borderRadius: 15,
  },
  sectionContainer: {
    marginTop: 3,
    paddingHorizontal: 4,
    // borderColor: 'black',
  },
  but:{
    alignItems: 'center',
    // flex:0.1,
          borderRadius: 5,
          backgroundColor: '#fff',
          width: 79,
          height: 39,
          margin: 16,
          // flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          // position:'absolute'
  },
  butext:{
      color: 'black',
      fontSize: 16,
      // fontWeight: '500',
  },
  buttons:{
    // flex:1,
    flexDirection:'row',
    bottom:40,
  },
});
export default Swipe2;
