// import React, {Component, useState, useRef} from 'react';
// import {
//   View,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Dimensions,
//   Image,
//   ScrollView,
// } from 'react-native';
// import Header from './Header';
// import LinearGradient from 'react-native-linear-gradient';
// // import {DynamicCollage, StaticCollage} from 'react-native-images-collage';

// const Nocropbox = ({props, route, navigation}) => {
//   let items = route.params;
//   // console.log(items.img)
//   const collageRef = useRef(null);
//   const Ifont = 'Poplin';

//   const [Mypic, setMypic] = useState({
//     uri: `data:${items.img.mime};base64,${items.img.data}`,
//   });

//   return (
//     <View
//       style={{
//         backgroundColor: '#EFE7FC',
//         height: Dimensions.get('window').height,
//       }}>
//       <LinearGradient
//         colors={['#fff', '#ECDCF7']}
//         start={{x: 0, y: 0}}
//         end={{x: 1, y: 0}}>
//         <View style={style.card}>
//           <Header navigation={navigation} title="9 Grid" />
//         </View>
//       </LinearGradient>

//       <View
//         style={{
//           width: '100%',
//           height: '55%',
//           margin: 13,
//           marginTop: '15%',
//           flexDirection: 'row',
//         }}>
//         <Image source={Mypic} style={{height: '100%', width: '90%'}} />
//       </View>
//       <LinearGradient
//         colors={['#fff', '#ECDCF7']}
//         start={{x: 0, y: 0}}
//         end={{x: 1, y: 0}}>
//         <View
//           style={{
//             top: 110,
//             height: '100%',
//             width: '100%',
//             flexDirection: 'row',
//             justifyContent: 'center',
//           }}>
//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate('Sample');
//             }}
//             style={{
//               alignItems: 'center',
//               borderRadius: 15,
//               backgroundColor: '#3672E9',
//               width: '70%',
//               height: 59,
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <Text
//               style={{
//                 fontFamily: `${Ifont}`,
//                 color: '#FFF',
//                 fontSize: 18,
//                 fontWeight: '500',
//               }}>
//               Crop It
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </LinearGradient>
//     </View>
//   );
// };

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginLeft: 10,
//     marginRight: 10,
//     alignItems: 'stretch',
//     justifyContent: 'center',
//   },
//   button: {
//     backgroundColor: 'blue',
//     // top:100,
//     width: 25,
//     height: 25,
//     // alignContent:'center',
//     borderRadius: 15,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 4,
//     borderColor: 'black',
//   },
// });

// export default Nocropbox;
