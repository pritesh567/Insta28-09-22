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
import AsyncStorage from '@react-native-async-storage/async-storage';

// import InstagramLogin from 'react-native-instagram-login';



const Instalogin = ({navigation}) => {

    const [Itoken, setItoken] = useState("null");
    const [instagramLogin, setinstagramLogin] = useState('');

    useEffect(() => {
        isInstaloginalready();
    }, [])

    const isInstaloginalready= async()=>{
        let myitok = await getInstaToken();
        console.log("storage token are : ", myitok)
        setItoken(myitok);
        if(myitok=="null"){
            console.log("please login", myitok)
        }else{
            navigation.navigate("Homepage", { logout: InsignOut, user: myitok.toString });
            console.log("something went wrong............", JSON.parse(myitok))
        }
    }

    const storeInstatoken = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('iglogintoken', jsonValue)
        } catch (e) {
            console.log("error in save data to storage", e);
        }
    }

    const getInstaToken = async () => {
        try {
            const logindata = await AsyncStorage.getItem('iglogintoken')

            if ((JSON.parse(logindata)!=="null")) {
                console.log("value are :", typeof(logindata), "data : ", logindata)
                return JSON.parse(logindata);
            }else{
                return "null";
            }


        } catch (e) {
            console.log("error geting data from async storage", e);
            return e;
        }

    }

    const setIgToken = async (data) => {
        console.log('data : ', data)
        setItoken(data.access_token)
        await storeInstatoken(data.access_token);
        let myitok = await getInstaToken()
        if(myitok!="null"){
            navigation.navigate("Homepage", { logout: InsignOut, user: myitok.toString });
        }
      }


    const InsignOut= async ()=>{
        await storeInstatoken("null");
        alert("Successfully Logout...!!!");
    }


    return (
        <View>
            <Text>Hii this is Instagram Login</Text>
            <TouchableOpacity onPress={()=> instagramLogin.show()} style={{backgroundColor:'gray' , height:40}}>
                <Text>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={getInstaToken} style={{backgroundColor:'gray' ,  height:40 , marginTop:30}}>
                <Text>Get token</Text>
            </TouchableOpacity>
            
            <InstagramLogin
          ref={ref => (setinstagramLogin(ref))}
          appId='1020259462203621'
          appSecret='678c8cb3e24b11ffb6a88422b90763d0'
          redirectUrl='https://github.com/'  //'your-redirect-Url'
          scopes={['user_profile', 'user_media']}
          onLoginSuccess={setIgToken}
          onLoginFailure={(data) => console.log(data)}
        />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Instalogin;
