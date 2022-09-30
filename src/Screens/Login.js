import React, { useState, useEffect,useRef } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image,TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Face from 'react-native-vector-icons/MaterialCommunityIcons';
import Simple from 'react-native-vector-icons/SimpleLineIcons';
import Gicon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


// import { LoginButton, AccessToken, GraphRequestManager, GraphRequest, LoginManager } from 'react-native-fbsdk-next';
// import axios from 'react-native-axios';

// import InstagramLogin from 'react-native-instagram-login';
// import {LoginButton, AccessToken, GraphRequest,GraphRequestManager} from 'react-native-fbsdk-next'

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';



export default function Login({ navigation }) {
  const [loggedIn, setloggedIn] = useState(false);
const [userInfo, setuserInfo] = useState([]);
// console.log("aaya kya",userInfo);


//   useEffect(()=>{
// GoogleSignin.configure()
//   },[])

//  const googleLogin = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       console.log(userInfo);
//       navigation.navigate("Homepage")


      // console.log("aaya kya",accessToken)
      
      
      // console.log("user info",userInfo)
    // } catch (error) {
    //   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //     // user cancelled the login flow
    //     console.log(error)
    //   } else if (error.code === statusCodes.IN_PROGRESS) {
    //     // operation (e.g. sign in) is in progress already
    //     console.log(error)

    //   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //     // play services not available or outdated
    //     console.log(error)

    //   } else {
    //     console.log(error)

        // some other error happened
  //     }
  //   }
  // };


  
    // ############################### I N S T A G R A M ---- L O G I N #######################################

    // const [Itoken, setItoken] = useState("null");
    // const [instagramLogin, setinstagramLogin] = useState('');

    // useEffect(() => {
    //     isInstaloginalready();
    // }, [])

    // const isInstaloginalready= async()=>{
    //     let myitok = await getInstaToken();
    //     console.log("storage token are : ", myitok)
    //     setItoken(myitok);
    //     if(myitok=="null"){
    //         console.log("please login", myitok)
    //     }else{
    //         navigation.navigate("Homepage", { logout: InsignOut, user: myitok.toString });
    //         console.log("something went wrong............", JSON.parse(myitok))
    //     }
    // }

    // const storeInstatoken = async (value) => {
    //     try {
    //         const jsonValue = JSON.stringify(value)
    //         await AsyncStorage.setItem('iglogintoken', jsonValue)
    //     } catch (e) {
    //         console.log("error in save data to storage", e);
    //     }
    // }

    // const getInstaToken = async () => {
    //     try {
    //         const logindata = await AsyncStorage.getItem('iglogintoken')

    //         if ((JSON.parse(logindata)!=="null")) {
    //             console.log("value are :", typeof(logindata), "data : ", logindata)
    //             return JSON.parse(logindata);
    //         }else{
    //             return "null";
    //         }


    //     } catch (e) {
    //         console.log("error geting data from async storage", e);
    //         return e;
    //     }

    // }

    // const setIgToken = async (data) => {
    //     console.log('data : ', data)
    //     setItoken(data.access_token)
    //     await storeInstatoken(data.access_token);
    //     let myitok = await getInstaToken()
    //     if(myitok!="null"){
    //         navigation.navigate("Homepage", { logout: InsignOut, user: myitok.toString });
    //     }
    //   }


    // const InsignOut= async ()=>{
    //     await storeInstatoken("null");
    //     alert("Successfully Logout...!!!");
    // }



    // //############################### F A C B O O K ---- L O G I N #######################################

    // useEffect(() => {
    //     isfSignedIn()
    // }, [])

    // const isfSignedIn = async () => {
    //     let token = await AccessToken.getCurrentAccessToken();

    //     const infoRequest = new GraphRequest(
    //         '/me',
    //         {
    //             accessToken: token.accessToken,
    //             parameters: {
    //                 fields: {
    //                     string: 'email,name,first_name,middle_name,last_name'
    //                 }
    //             }
    //         },
    //         responseInfoCallback
    //     );
    //     new GraphRequestManager().addRequest(infoRequest).start();

    //     axios.post(`https://graph.facebook.com/me?access_token=${token.accessToken}`, {
    //     })
    //         .then(function (response) {
    //             console.log("user is already logon : ", response.data.success);
    //             console.log(JSON.stringify(response))
    //             if (response.data.success) {
    //                 navigation.navigate("Homepage", { logout: fsignOut, user: token.toString });
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }


    // const fsignOut = async () => {
    //     try {
    //         LoginManager.logOut();
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }


    // const responseInfoCallback = (error, result) => {
    //     if (error) {
    //         console.log(error)
    //         console.log('Error fetching data: ' + error.toString());
    //     } else {
    //         console.log(result)
    //         console.log('Success fetching data: ' + result.toString());
    //         navigation.navigate("Homepage", { logout: fsignOut, user: result.toString });
    //     }
    // }

    // const Fblogin = async () => {
    //     await LoginManager.logInWithPermissions(["public_profile"]).then(
    //         (result) => {
    //             if (result.isCancelled) {
    //                 alert("login is cancelled.");
    //             } else {

    //                 console.log("Login completed but nothing showing\n\n")

    //                 AccessToken.getCurrentAccessToken().then(
    //                     (data) => {
    //                         let accessToken = data.accessToken
    //                         // alert(accessToken.toString())
    //                         console.log("Value are : ", data.accessToken);

    //                         const infoRequest = new GraphRequest(
    //                             '/me',
    //                             {
    //                                 accessToken: accessToken,
    //                                 parameters: {
    //                                     fields: {
    //                                         string: 'email,name,first_name,middle_name,last_name'
    //                                     }
    //                                 }
    //                             },
    //                             responseInfoCallback
    //                         );

    //                         // Start the graph request.
    //                         new GraphRequestManager().addRequest(infoRequest).start()
    //                     }
    //                 )
    //             }
    //         }
    //     );
    // }



    // //############################### G O O G L E ---- L O G I N #######################################

    // const [user, setUser] = useState({});

    // const storeData = async (value) => {
    //     try {
    //         const jsonValue = JSON.stringify(value)
    //         await AsyncStorage.setItem('googlelogin', jsonValue)
    //     } catch (e) {
    //         console.log("error in save data to storage", e);
    //     }
    // }

    // const getData = async () => {
    //     try {
    //         const logindata = await AsyncStorage.getItem('googlelogin')
    //         if (logindata !== null) {
    //             console.log("value are :", logindata)
    //             return logindata;
    //         }
    //     } catch (e) {
    //         console.log("error geting data from async storage", e);
    //     }
    // }

    // useEffect(() => {
    //     GoogleSignin.configure({
    //         webClientId: "915060436426-khdmg8fvdb0j5o1slnfoeh57ldbht7qi.apps.googleusercontent.com",
    //         offlineAccess: true,
    //         forceCodeForRefreshToken: true,

    //     });
    //     isSignedIn()
    // }, [])


    // const signIn = async () => {
    //     try {
    //         await GoogleSignin.hasPlayServices();
    //         const userInfo = await GoogleSignin.signIn();
    //         console.log("due_ ", userInfo);
    //         setUser(userInfo);
    //         await storeData(userInfo);
    //         gotohome();
    //     } catch (error) {
    //         console.log('Message__', error.message);
    //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //             console.log("User Cancelled the Login Flow");
    //         }
    //         else if (error.code === statusCodes.IN_PROGRESS) {
    //             console.log("Sign In");
    //         }
    //         else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //             console.log('play services not available');
    //         }
    //         else {
    //             console.log("some other error happend");;
    //         }
    //     }
    // };


    // const isSignedIn = async () => {
    //     const isSignedIn = await GoogleSignin.isSignedIn();
    //     if (isSignedIn) {
    //         getCurrentUserInfo();
    //         console.log("is signedin - ", isSignedIn)
    //         gotohome();
    //     } else {
    //         console.log("Please Login");
    //     }
    // };


    // const getCurrentUserInfo = async () => {
    //     try {
    //         // const userInfo = await GoogleSignin.signInSilently();
    //         const userInfo = await getData();
    //         console.log('edit__', userInfo);
    //     } catch (error) {
    //         if (error.code === statusCodes.SIGN_IN_REQUIRED) {
    //             alert('user has not signed in yet');
    //             console.log("user has not signed in yet")
    //         } else {
    //             alert("Something went wrong");
    //             console.log("Something went wrong")
    //         }
    //     }
    // };

    // const signOut = async () => {
    //     try {
    //         await GoogleSignin.revokeAccess();
    //         await GoogleSignin.signOut();
    //         setUser({});
    //         await storeData({});
    //         console.log("Logout Successfully : ", user)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }


    // const gotohome = () => {
    //     navigation.navigate("Homepage", { logout: signOut, user: user });
    // }

    const [Showvone, setShowvone] = useState(false);
    const [Showvtwo, setShowvtwo] = useState(false);
    const [showone,setShowone]= useState(false)
    const f1 =useRef(null)
    const f2 =useRef(null)

    const [Valueone, setValueone] = useState({
        emailId:"",
        passWord:""
        
    });
    const handleLogIn = () => {
    if(Valueone.emailId === ""){
        f1.current.focus()
    }else if(Valueone.passWord === ""){
        f2.current.focus()
    }else{
  setShowone(true)
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "email": Valueone.emailId,
    "password": Valueone.passWord
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://13.127.119.21:5000/user/login", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))

    
    .catch(error => console.log('error', error));
    navigation.navigate("Homepage")
    }

}


    return (<>

    <ScrollView>

        <View style={{ marginHorizontal: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
            <Image
                style={{ height: 201, width: 269 }}
                source={require('../../assets/loginpic.png')}
            />
        </View>




        <View style={{ marginLeft: 30 }}>
            <Text style={{ fontSize: 36, fontFamily: 'Poppins-Regular', fontWeight: '500', color: '#1D1617' }}>Login</Text>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                {/* <Icon name="at" size={25} color={'#ADA4A5'}/> */}     

                <Image
                    style={{ width: 20, height: 20, tintColor: '#7B6F72',marginTop:10 }}
                    source={require('../../assets/atthe.png')}
                />

                <TextInput ref={f1} onChangeText={(e) => setValueone({...Valueone,emailId:e})} value={Valueone.emailId}  onBlur={()=>{setShowvone(false)}} onFocus={()=>{setShowvone(true)}} placeholder="Email Id" style={{ fontSize: 16, color: '#ADA4A5', marginLeft: 10, fontFamily: 'Poppins-Regular' }}></TextInput>
            </View>

            <View style={{ borderBottomWidth: 2, width: '90%', borderColor: '#DEDEDE', marginTop: 10 }}>

            </View>


            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                {/* <Simple name="lock" size={20} color={'#ADA4A5'}/> */}

                <Image
                    style={{ width: 17, height: 24, tintColor: '#7B6F72',marginTop:10 }}
                    source={require('../../assets/vector.png')}
                />


                <TextInput ref={f2} onChangeText={(e) => setValueone({...Valueone,passWord:e})} value={Valueone.passWord}  onBlur={()=>{setShowvtwo(false)}} onFocus={()=>{setShowvtwo(true)}} placeholder="Password" style={{ fontSize: 16, color: '#ADA4A5', marginLeft: 10, fontFamily: 'Poppins-Regular' }}></TextInput>
            </View>

            <View style={{ borderBottomWidth: 2, width: '90%', borderColor: '#DEDEDE', marginTop: 10 }}>

            </View>

          <TouchableOpacity onPress={() => { navigation.navigate("Forgot") }}>
            <View style={{ alignItems: 'flex-end', marginRight: 40, marginTop: 10 }}>
                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '700', color: '#0049B9' }}>Forgot Password?</Text>
            </View>
            </TouchableOpacity>


            {/* <TouchableOpacity onPress={()=> navigation.navigate('Dpsaverone')}  */}
            <TouchableOpacity onPress={handleLogIn}
            style={{ alignItems: 'center', marginTop: 10, borderRadius: 20, borderWidth: 1, padding: 20, backgroundColor: '#3672E9', borderColor: '#1589FF', width: '90%' }}>
            {/* <TouchableOpacity onPress={getData} style={{ alignItems: 'center', marginTop: 10, borderRadius: 20, borderWidth: 1, padding: 20, backgroundColor: '#3672E9', borderColor: '#1589FF', width: '90%' }}> */}
                <Text style={{ color: '#BFF4FF', fontSize: 18, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>Login</Text>
            </TouchableOpacity>

            <View style={{ marginHorizontal: 100, flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ color: '#818181', fontSize: 13, fontFamily: 'Poppins-Regular', fontWeight: '400' }}>Or,login with....</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Homepage") }}>
                <Text style={{ marginLeft: 90, color: '#696969', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '400' }}>Skip</Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity  style={{ marginTop: 10, borderRadius: 5, padding: 20, backgroundColor: '#F1F6F7', borderColor: '#1589FF', width: '90%', flexDirection: 'row' }}>
                <Image
                    style={{ height: 25, width: 25 }}
                    source={require('../../assets/google.png')}
                />
                <Text style={{ color: '#C0C0C0', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500', marginLeft: 50 }}>Login with Google</Text>
            </TouchableOpacity>


            <TouchableOpacity  style={{ marginTop: 10, borderRadius: 5, padding: 20, backgroundColor: '#F1F6F7', borderColor: '#1589FF', width: '90%', flexDirection: 'row',justifyContent:'center' }}>
                <Face name="facebook" size={25} color={'#3672E9'} style={{marginRight:30}} />
                <Text style={{ color: '#C0C0C0', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500', marginRight: 100 }}>Login with Facebook</Text>

            </TouchableOpacity>
            
            
            <TouchableOpacity onPress={()=>instagramLogin.show()} style={{ marginTop: 10, borderRadius: 5, padding: 20, backgroundColor: '#F1F6F7', borderColor: '#1589FF', width: '90%', flexDirection: 'row' }}>
            <Image
                    style={{ height: 25, width: 25 }}
                    source={require('../../assets/insta.png')}
                />
                <Text style={{ color: '#C0C0C0', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500', marginLeft: 50 }}>Login with Instagram</Text>
            </TouchableOpacity>

            {/* <InstagramLogin
          ref={ref => (setinstagramLogin(ref))}
          appId='1020259462203621'
          appSecret='678c8cb3e24b11ffb6a88422b90763d0'
          redirectUrl='https://github.com/'  //'your-redirect-Url'
          scopes={['user_profile', 'user_media']}
        //   onLoginSuccess={setIgToken}
          onLoginFailure={(data) => console.log(data)}
        /> */}



            <View style={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', marginRight: 60, marginTop: 10 }}>
                    <Text style={{ color: '#C0C0C0', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>New to insta toolkit?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
                    <Text style={{ color: '#0063E2', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '700', marginLeft: 5 }}>Register</Text>
                    </TouchableOpacity>


                    
                </View>

            </View>

        </View>

        <View style={{height:100, width:'100%'}}>
        </View>
</ScrollView>

    </>);


}

const styles = StyleSheet.create({

});