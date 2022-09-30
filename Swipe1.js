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
{
  /* <Text style={[]}>Your Profiledklfhldfdfhdfh</Text>
        <Text style={[]}>Enter your name and add a profile picture.</Text> */
}

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

// import React, {useRef, useState} from 'react';
// import {
//   SafeAreaView,
//   Text,
//   StyleSheet,
//   View,
//   StatusBar,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import {DynamicCollage, StaticCollage} from 'react-native-images-collage';
// import Header from './9Grid/Header';
// import LinearGradient from 'react-native-linear-gradient';
// import { Dimensions } from "react-native";
// const win = Dimensions.get('window');

// const Swipe1 = ({props, route,navigation}) => {
//     const items = route.params ;
//     // const Mypic = [
//     //   (`data:${items.img.mime};base64,${items.img.data}`),
//     //   (`data:${items.img.mime};base64,${items.img.data}`),

//     // ];

//     const [Mypic, setMypic] =useState ({uri: `data:${items.img.mime};base64,${items.img.data}`});
//     const sourcetwo = [
//             (`data:${items.img.mime};base64,${items.img.data}`),
//             (`data:${items.img.mime};base64,${items.img.data}`),

//           ]

//           const sourcethree = [
//             (`data:${items.img.mime};base64,${items.img.data}`),
//             (`data:${items.img.mime};base64,${items.img.data}`),
//             (`data:${items.img.mime};base64,${items.img.data}`),

//           ]
//     return (
//         <View>
//           <View>
//  <LinearGradient
//         colors={['#ffffff', '#E4D5F9']}
//         start={{x: 0, y: 0}}
//         end={{x: 1, y: 0}}>
//         <View style={{height:95}}>
//           <Header navigation={navigation} title="Swipe Photo 1" />
//         </View>

// <View>
//         <View
//       style={{flexDirection:'column',bottom:20,width: win.width/1,height: win.height/1.5}}>
//     <Image
//   style={{
//     width: win.width/3,
//     height: win.height/1.5,
//     borderWidth:9,
//     // flexWrap:'wrap',
//     // flexDirection:"row",
//     // resizeMode: 'stretch'
//     alignSelf: 'flex-start',
//     borderWidth: 3,
//  aspectRatio: 0.8,
//  margin:3,
//     // borderwidth: 3,
//     borderColor:'#fff'
//     // x:0,
//     // y:1
//   }}
//   source={Mypic}

// />

// {/* <Image
//   style={{
//     width: win.width/3,
//     height: win.height/1.5,
//     // flexWrap:'wrap',
//     // flexDirection:"row",
//     // resizeMode: 'repeat',
//     alignSelf: 'center',
//     borderWidth: 3,
//     aspectRatio:1.5,
//     margin:3,
//     borderColor:'#fff',

//     position:'absolute'
//   }}
//   source={Mypic}
// />  */}

// <Image
//   style={{
//     width: win.width/3,
//     height: win.height/1.5,
//     // flexWrap:'wrap',
//     // flexDirection:"row",
//     // resizeMode: 'repeat',
//     alignSelf: 'flex-end',
//     // borderWidth: 2,
//     position:'absolute',
//     aspectRatio:1.7,
//     margin:3,
//     borderColor:'#fff',
//     // borderRadius: 20,
//     // x:0,
//     // y:1
//   }}
//   // source={Mypic}

// />
// </View>
// </View>

// <View>
// <View style={style.buttons}>
//           <TouchableOpacity
//             style={style.but}>
//             <Text style={style.butext}>1</Text>
//           </TouchableOpacity>

//           <TouchableOpacity

//             // onPress={this.goToTop}
//             // onPress= {(image => {  navigation.navigate ("Sample3" ,{img : three }); })}
//             style={style.but}>
//             <Text style={style.butext}>2</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             // onPress= {() => navigation.navigate ("Swipe3" ,{img : sourcethree}); })}
//             style={style.but}>
//             <Text style={style.butext}>3</Text>
//           </TouchableOpacity>
//         </View>

//         <View
//           style={{
//             // flex:2,
//             backgroundColor: '#3672E9',
//             width: 200,
//             height: 50,
//             left:70,
//             borderRadius: 15,
//             // top:25,
//             alignItems: 'center',
//             justifyContent: 'center',

//           }}>
//           <TouchableOpacity
//             style={{
//               alignItems: 'center',
//               borderRadius: 15,

//             }}>
//             <Text
//               style={{
//                 color: '#FFF',
//                 fontSize: 18,
//               }}>
//               Apply
//             </Text>
//           </TouchableOpacity>
//         </View>
//         </View>

//         </LinearGradient>
//       </View>
//       {/* </View> */}
//       </View>

//     );
//   };

//   const style = StyleSheet.create({

//     button: {
//       backgroundColor: 'blue',
//       width: 85,
//       height: 25,
//       // alignContent:'center',
//       borderRadius: 15,
//     },
//     sectionContainer: {
//       marginTop: 3,
//       paddingHorizontal: 4,
//       // borderColor: 'black',
//     },
//     but:{
//       alignItems: 'center',
//       // flex:0.1,
//             borderRadius: 5,
//             backgroundColor: '#fff',
//             width: 79,
//             height: 39,
//             margin: 16,
//             // flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'center',
//             // position:'absolute'
//     },
//     butext:{
//         color: 'black',
//         fontSize: 16,
//         // fontWeight: '500',
//     },
//     buttons:{

//       flexDirection:'row',
//       // bottom:10,
//       // top:25,

//     },
//   });

// export default Swipe1;

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
  Dimensions,
} from 'react-native';
// import {DynamicCollage, StaticCollage} from 'react-native-images-collage';
import Header from './9Grid/Header';
import LinearGradient from 'react-native-linear-gradient';
// import {MatrixTransform} from 'react-native';
// const Sample= ({props, route, navigation}) => {
const win = Dimensions.get('window');
const Swipe3 = ({props, route, navigation}) => {
  const items = route.params;
  const [Mypic, setMypic] = useState({
    uri: `data:${items.img.mime};base64,${items.img.data}`,
  });

  //   const one =[
  //    (`data:${items.img.mime};base64,${items.img.data}`)
  //   ];
  const two = [
    `data:${items.img.mime};base64,${items.img.data}`,
    // `data:${items.img.mime};base64,${items.img.data}`,
  ]
  const three = [
    // `data:${items.img.mime};base64,${items.img.data}`,
    `data:${items.img.mime};base64,${items.img.data}`,
    `data:${items.img.mime};base64,${items.img.data}`,
  ]

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
          <Header navigation={navigation} title="Swip Photo 1" />
        </View>
      </LinearGradient>


{/* <ScrollView style={{width:"100%", height:"100%"}} horizontal={true}> */}
      <View
        style={{
          flexDirection: 'column',
          bottom: 20,
          // width: win.width / 1,
          // height: win.height / 1.5,
        }}>
         {/* <Image
          style={{
            // width: win.width / 3,
            // height: win.height / 1.5,
            borderWidth: 9,
            // flexWrap:'wrap',
            // flexDirection:"row",
            // resizeMode: 'stretch'
            alignSelf: 'flex-start',
            borderWidth: 3,
            aspectRatio: 0.8,
            margin: 3,
            // borderwidth: 3,
            borderColor: '#fff',
            // x:0,
            // y:1
          }}
          source={Mypic}
        /> */}
      </View>

      <View
        style={{
          width: '100%',
          height: '55%',
          margin: 13,
          marginTop: '15%',
          flexDirection: 'row',
        }}>
        <Image source={Mypic} style={{height: '100%', width: '90%'}} />
      </View>
      <View>
        <View style={style.buttons}>
          <TouchableOpacity
            // onPress= {(image => {  navigation.navigate ("Sample" ,{img : two }); })}
            style={style.but}>
            <Text style={style.butext}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity
             onPress= {(Mypic => {  navigation.navigate ("Swipe2" ,{imgg : Mypic }); })}
            style={style.but}>
            <Text style={style.butext}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity
          
          onPress= {(Mypic => {  navigation.navigate ("Swipe3" ,{imggg : Mypic }); })}
            style={style.but}>
            <Text style={style.butext}>3</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              borderRadius: 15,
              backgroundColor: '#3672E9',
              width: 200,
              height: 50,
              left: 60,
              borderRadius: 15,
              // bottom:45,
              alignItems: 'center',
              justifyContent: 'center',
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
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    width: 15,
    height: 15,
    // alignContent:'center',
    borderRadius: 15,
  },
  sectionContainer: {
    marginTop: 3,
    paddingHorizontal: 4,
    borderColor: 'red',
    borderWidth: 1,
  },
  but: {
    alignItems: 'center',
    // flex:0.1,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: 79,
    height: 39,

    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // position:'absolute'
  },
  butext: {
    color: 'black',
    fontSize: 16,
    // fontWeight: '500',
  },
  buttons: {
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // bottom:10,
    marginTop: 10,
    height: 50,
  },
});
export default Swipe3;
