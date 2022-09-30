import React, { Component, useRef, useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
// import Icon from 'react-native-vector-icons/Ionicons';
// import User from 'react-native-vector-icons/MaterialCommunityIcons';
// import Simple from 'react-native-vector-icons/SimpleLineIcons';
// import OtpInputs from 'react-native-otp-inputs';
// import LinearGradient from 'react-native-linear-gradient';
// import OTPInputView from '@twotalltotems/react-native-otp-input'



import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';



export default function App({ navigation }) {

  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState("0");
  const [pin2, setPin2] = useState("0");
  const [pin3, setPin3] = useState("0");
  const [pin4, setPin4] = useState("0");
  const _onChangeText = (val, setOpt, preRef = null, nextRef = null) => {
    setOpt(val)
    if (val.length) {
        if (nextRef) {
            nextRef.current.focus()
        }
    } else {
        if (preRef) {
            preRef.current.focus()
        }
    }
}
const pin = pin1+pin2+pin3+pin4
console.log(pin)



  const ForgotPassword = () =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "code": pin
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://13.127.119.21:5000/user/otp-verification", requestOptions)
      .then(response => response.json())
      .then(result =>  console.log("perfect",result))


      .catch(error => console.log('error', error));
    
  }

 

  return (<>

    {/* <View style={styles.container}>
        <OtpInputs
          handleChange={(code) => console.log(code)}
          numberOfInputs={6}
        />
      </View> */}




    <View style={{ marginHorizontal: 25 }}>

      <Image
        style={styles.tinyLogo}
        source={require('../../assets/loginpic.png')}
      />
    </View>

    <View style={{ marginLeft: 30 }}>
      <Text style={{ fontSize: 36, fontFamily: 'Poppins-Regular', fontWeight: '500', color: '#1D1617' }}>Enter OTP</Text>


      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular' }}>An 4 digits has been sent to </Text>
        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', marginTop: 5 }}>+91 7325958973</Text>


      </View>

     


      <View style={styles.TopView}>
        <View style={styles.TextInputView}>
          <TextInput
            ref={pin1Ref}
            keyboardType={'number-pad'}
            maxLength={1}
            onChangeText={(text) => _onChangeText(text, setPin1, null, pin2Ref)}
            // onChange={(pin1) => {
            //   setPin1(pin1);
            //   console.log(pin1)
            //   if (pin1 != "") {
            //     pin2Ref.current.focus();
            //   }

            // }}
            style={styles.TextInputText}
          />

        </View>

        <View style={styles.TextInputView}>
          <TextInput
            ref={pin2Ref}
            keyboardType={'number-pad'}
            maxLength={1}
            onChangeText={(text) => _onChangeText(text, setPin2, pin1Ref, pin3Ref)}
            // onChange={(pin2) => {
            //   setPin2(pin2);
            //   if (pin2 != "") {
            //     pin3Ref.current.focus();
            //   }
            // }}
            style={styles.TextInputText}
          />

        </View>

        <View style={styles.TextInputView}>
          <TextInput
            ref={pin3Ref}

            keyboardType={'number-pad'}
            maxLength={1}
            onChangeText={(text) => _onChangeText(text, setPin3, pin2Ref, pin4Ref)}
            // onChange={(pin3) => {
            //   setPin3(pin3);
            //   if (pin3 != "") {
            //     pin4Ref.current.focus();
            //   }
            // }}
            style={styles.TextInputText}
          />

        </View>

        <View style={styles.TextInputView}>
          <TextInput
            ref={pin4Ref}
            keyboardType={'number-pad'}
            maxLength={1}
            onChangeText={(text) => _onChangeText(text, setPin4, pin3Ref, null)}
            // onChange={(pin4) => {
            //   setPin4(pin4);
            // }}
            style={styles.TextInputText}
          />

        </View>

      </View>

 

      
















      {/* <OTPInputView
    style={{width: '80%', height: 200}}
    pinCount={4}
    code=""
    autoFocusOnLoad={true}
    // codeInputFieldStyle={styles.borderStyleBase}
    // codeInputHighlightStyle={styles.borderStyleHighLighted}
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code => {
        console.log(`Code is ${code}, you are good to go!`)
    })}
/> */}

<TouchableOpacity onPress={ForgotPassword}>
      <View style={{ alignItems: 'center', marginTop: 80, borderRadius: 20, borderWidth: 1, padding: 20, backgroundColor: '#0164FF', borderColor: '#1589FF', width: '90%' }}>
        <Text style={{ color: '#BFF4FF', fontSize: 18, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>Submit</Text>
      </View>
      </TouchableOpacity>


  

    </View>


    


  </>);


}

const styles = StyleSheet.create({
  // borderStyleBase: {
  //   width: 30,
  //   height: 45
  // },

  // borderStyleHighLighted: {
  //   borderColor: "#03DAC6",
  // },

  // underlineStyleBase: {
  //   width: 30,
  //   height: 45,
  //   borderWidth: 0,
  //   borderBottomWidth: 1,
  // },

  // underlineStyleHighLighted: {
  //   borderColor: "#03DAC6",
  // },

  TextInputView: {
    borderRadius:7,
    width: 41,
    justifyContent: 'center',
    alignItems: 'center',
    height:41,
    //backgroundColor:'#F1F6F7'
    backgroundColor:'#F1F6F7',
    margin:10


  },
  TextInputText: {
    fontSize: 18,
    color:'#A9A9A9'
  },
  TopView:{
    flexDirection:'row',
    marginTop:30
  }

});