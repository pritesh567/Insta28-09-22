// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image } from "react-native";
// import Icon from 'react-native-vector-icons/Ionicons';
// import Face from 'react-native-vector-icons/MaterialCommunityIcons';
// import Simple from 'react-native-vector-icons/SimpleLineIcons';
// import Gicon from 'react-native-vector-icons/Ionicons';

// import {
//     CodeField,
//     Cursor,
//     useBlurOnFulfill,
//     useClearByFocusCell,
// } from 'react-native-confirmation-code-field';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { LoginButton, AccessToken, GraphRequestManager, GraphRequest, LoginManager } from 'react-native-fbsdk-next';
// import axios from 'react-native-axios';

// const Flogin = ({ navigation }) => {

//     useEffect(() => {
//         isfSignedIn()
//     }, [])

//     const isfSignedIn = async () => {
//         let token = await AccessToken.getCurrentAccessToken();

//         const infoRequest = new GraphRequest(
//             '/me',
//             {
//                 accessToken: token.accessToken,
//                 parameters: {
//                     fields: {
//                         string: 'email,name,first_name,middle_name,last_name'
//                     }
//                 }
//             },
//             responseInfoCallback
//         );
//         new GraphRequestManager().addRequest(infoRequest).start();

//         axios.post(`https://graph.facebook.com/me?access_token=${token.accessToken}`, {
//         })
//             .then(function (response) {
//                 console.log("user is already logon : ", response.data.success);
//                 console.log(JSON.stringify(response))
//                 if(response.data.success){
//                     navigation.navigate("Homepage", { logout: fsignOut, user: token.toString });
//                 }
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }


//     const fsignOut = async () => {
//         try {
//             LoginManager.logOut();
//         } catch (error) {
//             console.error(error);
//         }
//     }


//     const responseInfoCallback = (error, result) => {
//         if (error) {
//             console.log(error)
//             console.log('Error fetching data: ' + error.toString());
//         } else {
//             console.log(result)
//             console.log('Success fetching data: ' + result.toString());
//             navigation.navigate("Homepage", { logout: fsignOut, user: result.toString });
//         }
//     }

//     const Fblogin= async()=>{
//         LoginManager.logInWithPermissions(["public_profile"]).then(
//             function (error, result) {
//                 (error, result) => {
//                     if (error) {
//                         alert("login has error: " + result.error);
//                     } else if (result.isCancelled) {
//                         alert("login is cancelled.");
//                     } else {

//                         AccessToken.getCurrentAccessToken().then(
//                             (data) => {
//                                 let accessToken = data.accessToken
//                                 // alert(accessToken.toString())
//                                 console.log("Value are : ", data.accessToken);

//                                 const infoRequest = new GraphRequest(
//                                     '/me',
//                                     {
//                                         accessToken: accessToken,
//                                         parameters: {
//                                             fields: {
//                                                 string: 'email,name,first_name,middle_name,last_name'
//                                             }
//                                         }
//                                     },
//                                     responseInfoCallback
//                                 );

//                                 // Start the graph request.
//                                 new GraphRequestManager().addRequest(infoRequest).start()

//                             }
//                         )

//                     }
//                 }
//             },
//         );
//     }


//     return (
//         <View>
//             <Text style={{ fontSize: 30, color: 'black' }}>Hii Login</Text>

//             <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', justifyContent: "space-between" }}>

//                 <TouchableOpacity onPress={Fblogin} style={{ backgroundColor: 'blue', padding: 20, borderRadius: 20, marginTop: 15 }}>
//                     <Text>Login</Text>
//                 </TouchableOpacity>


//                 <LoginButton
//                     onLoginFinished={
//                         (error, result) => {
//                             if (error) {
//                                 alert("login has error: " + result.error);
//                             } else if (result.isCancelled) {
//                                 alert("login is cancelled.");
//                             } else {

//                                 AccessToken.getCurrentAccessToken().then(
//                                     (data) => {
//                                         let accessToken = data.accessToken
//                                         // alert(accessToken.toString())
//                                         console.log("Value are : ", data.accessToken);




//                                         const infoRequest = new GraphRequest(
//                                             '/me',
//                                             {
//                                                 accessToken: accessToken,
//                                                 parameters: {
//                                                     fields: {
//                                                         string: 'email,name,first_name,middle_name,last_name'
//                                                     }
//                                                 }
//                                             },
//                                             responseInfoCallback
//                                         );

//                                         // Start the graph request.
//                                         new GraphRequestManager().addRequest(infoRequest).start()

//                                     }
//                                 )

//                             }
//                         }
//                     }
//                     onLogoutFinished={() => alert("logout.")} />

//             </View>
//         </View >
//     );
// }

// const styles = StyleSheet.create({})

// export default Flogin;
