import React, { useState,useRef } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import User from 'react-native-vector-icons/MaterialCommunityIcons';
import Simple from 'react-native-vector-icons/SimpleLineIcons';
// import axios from "axios"



export default function Signup({ navigation }) {
  const [Showvone, setShowvone] = useState(false);
  const [Showvtwo, setShowvtwo] = useState(false);
  const [Showvthree, setShowvthree] = useState(false);
  const [Showvfour, setShowvfour] = useState(false);



  const [showone,setShowone]= useState(false)
  const f1 =useRef(null)
  const f2 =useRef(null)
  const f3 =useRef(null)
  const f4 =useRef(null)


  const [Valueone, setValueone] = useState({
      emailId:"",
      fullName:"",
      mobileNo:"",
      passWord:""
      
  });
  const handleSignIn = () => {
  if(Valueone.emailId === ""){
    f1.current.focus()
}else if(Valueone.fullName === ""){
    f2.current.focus()
}else if(Valueone.mobileNo === ""){
    f3.current.focus()
}
else if(Valueone.passWord === ""){
  f4.current.focus()
}
else{
  setShowone(true)

  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": Valueone.fullName,
  "mobile": Valueone.mobileNo,
  "email": Valueone.emailId,
  "password": Valueone.passWord
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://13.127.119.21:5000/user/signup", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))

  // setShowone(false)

  .catch(error => console.log('error', error));
  navigation.navigate("Login")








}
  }



//   var axios = require('axios');
// var data = JSON.stringify({
//   "name": "abhishank",
//   "mobile": "8602199916",
//   "email": "abhishank@gmail.com",
//   "password": "abhishank"
// });

// var config = {
//   method: 'post',
//   url: 'http://13.127.119.21:5000/user/signup',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });


  return (<>
    <ScrollView>

      <View style={{ marginHorizontal: 25, marginTop: 40 }}>

        <Image
          style={styles.tinyLogo}
          source={require('../../assets/loginpic.png')}
        />
      </View>

      <View style={{ marginLeft: 30 }}>
        <Text style={{ fontSize: 36, fontFamily: 'Poppins-Regular', fontWeight: '500', color: '#1D1617' }}>Sign Up</Text>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          {/* <Icon name="at" size={25} color={'#ADA4A5'}/> */}

          <Image
            style={{ width: 20, height: 20, tintColor: '#7B6F72', marginTop: 10 }}
            source={require('../../assets/atthe.png')}
          />

          <TextInput ref={f1} onChangeText={(e) => setValueone({...Valueone,emailId:e})} value={Valueone.emailId}  onBlur={()=>{setShowvone(false)}} onFocus={()=>{setShowvone(true)}}  style={{ fontSize: 16, color: '#ADA4A5', marginLeft: 10, fontFamily: 'Poppins-Regular' }} placeholder="Email ID"></TextInput>
        </View>

        <View style={{ borderBottomWidth: 2, width: '90%', borderColor: '#DEDEDE', marginTop: 5 }}>

        </View>


        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <User name="account-outline" size={25} color={'#ADA4A5'} style={{ marginTop: 10 }} />

          <TextInput ref={f2} onChangeText={(e) => setValueone({...Valueone,fullName:e})} value={Valueone.fullName}  onBlur={()=>{setShowvtwo(false)}} onFocus={()=>{setShowvtwo(true)}} style={{ fontSize: 16, color: '#ADA4A5', marginLeft: 10, fontFamily: 'Poppins-Regular' }} placeholder="Full name"></TextInput>
        </View>

        <View style={{ borderBottomWidth: 2, width: '90%', borderColor: '#DEDEDE' }}>

        </View>

        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          {/* <Icon name="call-outline" size={20} color={'#ADA4A5'}/> */}
          <Image
            style={{ width: 18, height: 18, tintColor: '#7B6F72', marginTop: 10 }}
            source={require('../../assets/atthe.png')}
          />



          <TextInput ref={f3} onChangeText={(e) => setValueone({...Valueone,mobileNo:e})} value={Valueone.mobileNo}  onBlur={()=>{setShowvthree(false)}} onFocus={()=>{setShowvthree(true)}} style={{ fontSize: 16, color: '#ADA4A5', marginLeft: 18, fontFamily: 'Poppins-Regular' }} placeholder="Mobile"></TextInput>
        </View>

        <View style={{ borderBottomWidth: 2, width: '90%', borderColor: '#DEDEDE' }}>

        </View>


        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          {/* <Simple name="lock" size={20} color={'#ADA4A5'}/> */}

          <Image
            style={{ width: 17, height: 24, tintColor: '#7B6F72', marginTop: 10 }}
            source={require('../../assets/vector.png')}
          />

          <TextInput ref={f4} onChangeText={(e) => setValueone({...Valueone,passWord:e})} value={Valueone.passWord}  onBlur={()=>{setShowvfour(false)}} onFocus={()=>{setShowvfour(true)}} style={{ fontSize: 16, color: '#ADA4A5', marginLeft: 18, fontFamily: 'Poppins-Regular' }} placeholder="Password"></TextInput>
        </View>

        <View style={{ borderBottomWidth: 2, width: '90%', borderColor: '#DEDEDE' }}>

        </View>

        <View style={{ flexDirection: 'row', marginHorizontal: 5, marginTop: 20 }}>
          <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular' }}>By signing up you're agree to our</Text>
          <Text style={{ fontSize: 13, marginLeft: 5, color: '#3672E9', fontWeight: '500', fontFamily: 'Poppins-Regular' }}>Tearms & Conditions</Text>



        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ fontFamily: 'Poppins-Regular' }}>and</Text>
          <Text style={{ marginLeft: 5, color: '#3672E9', fontWeight: '500', fontSize: 13, fontFamily: 'Poppins-Regular' }}>Praivacy Policy</Text>

        </View>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Forgot')}> */}
        <TouchableOpacity onPress={handleSignIn}>
          <View style={{ alignItems: 'center', marginTop: 10, borderRadius: 20, borderWidth: 1, padding: 20, backgroundColor: '#3672E9', borderColor: '#1589FF', width: '90%', marginHorizontal: 5 }}>
            <Text style={{ color: '#BFF4FF', fontSize: 18, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>Register</Text>
          </View>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30, marginRight: 10 }}>
          <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular' }}>Joined us before?</Text>
          <Text style={{ marginLeft: 5, color: '#3672E9', fontWeight: '500', fontSize: 15, fontFamily: 'Poppins-Regular' }}>Login</Text>

        </View>





      </View>
      <View style={{ marginBottom: 200 }}>

      </View>
    </ScrollView>

  </>);


}

const styles = StyleSheet.create({

});