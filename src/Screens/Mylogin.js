import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Face from 'react-native-vector-icons/MaterialCommunityIcons';
import Simple from 'react-native-vector-icons/SimpleLineIcons';
import Gicon from 'react-native-vector-icons/Ionicons';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

// import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';

const Mylogin = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: "915060436426-khdmg8fvdb0j5o1slnfoeh57ldbht7qi.apps.googleusercontent.com", 
            offlineAccess: true,
            forceCodeForRefreshToken: true,

        });
        isSignedIn()
    }, [])

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log("due_ ", userInfo);
            setUser(userInfo);
        } catch (error) {
            console.log('Message__', error.message);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log("User Cancelled the Login Flow");
            }
            else if (error.code === statusCodes.IN_PROGRESS) {
                console.log("Sign In");
            }
            else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('play services not available');
            }
            else {
                console.log("some other error happend");;
            }
        }
    };


    const isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (!!isSignedIn) {
            getCurrentUserInfo();
        } else {
            console.log("Please Login");
        }
    };


    const getCurrentUserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            console.log('edit__', userInfo);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                alert('user has not signed in yet');
                console.log("user has not signed in yet")
            } else {
                alert("Something went wrong");
                console.log("Something went wrong")
            }
        }
    };

    const signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setUser({});
            console.log("Logout Successfully : ", user)
        } catch (error) {
            console.error(error);
        }
    }


    
    // webClientId: "915060436426-usvlba85cdljsmtnp88d4lsja9dm9pjs.apps.googleusercontent.com", 
    
    // React.useEffect(() => {
    //     GoogleSignin.configure({
    //       webClientId: "915060436426-khdmg8fvdb0j5o1slnfoeh57ldbht7qi.apps.googleusercontent.com", 
    //       offlineAccess: true
    //     });
    //   }, [])


    //   const GoogleSingUp = async () => {
    //     try {
    //       await GoogleSignin.hasPlayServices();
    //       await GoogleSignin.signIn().then(result => { console.log("Sign up : ", result) });
    //     } catch (error) {
    //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //         // user cancelled the login flow
    //         alert('User cancelled the login flow !');
    //       } else if (error.code === statusCodes.IN_PROGRESS) {
    //         alert('Signin in progress');
    //         // operation (f.e. sign in) is in progress already
    //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //         alert('Google play services not available or outdated !');
    //         // play services not available or outdated
    //       } else {
    //         console.log(error)
    //       }
    //     }
    //   };


    //   const signIn = async () => {
    //     try {
    //       await GoogleSignin.hasPlayServices();
    //       const userInfo = await GoogleSignin.signIn();
    //       setUser({ userInfo });
    //       console.log("login successfull : ", userInfo)
    //     } catch (error) {
    //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //         console.log("sign in cancelled");
    //       } else if (error.code === statusCodes.IN_PROGRESS) {
    //         console.log("sign in progress");
    //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //         console.log("services not available");
    //       } else {
    //         console.log("something went wrong", error);
    //       }
    //     }
    //   };



    return (
        <View>
            <Text style={{ fontSize: 30, color: 'black' }}>Hii Login</Text>

            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', justifyContent: "space-between" }}>

                {/* <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={signIn}
                />; */}

                {/* <TouchableOpacity onPress={GoogleSingUp} style={{ backgroundColor: 'gray', padding: 20, borderRadius: 20, marginTop: 15 }}>
                    <Text>Sign UP</Text>
                </TouchableOpacity> */}

                <TouchableOpacity onPress={signIn} style={{ backgroundColor: 'blue', padding: 20, borderRadius: 20, marginTop: 15 }}>
                    <Text>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={signOut} style={{ backgroundColor: 'pink', padding: 20, borderRadius: 20, marginTop: 15 }}>
                    <Text>Sign Out</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: 'green', padding: 20, borderRadius: 20, marginTop: 15 }}>
                    <Text>Login with Instagram</Text>
                </TouchableOpacity>







            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Mylogin;
