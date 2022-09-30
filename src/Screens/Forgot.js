import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import User from 'react-native-vector-icons/MaterialCommunityIcons';
import Simple from 'react-native-vector-icons/SimpleLineIcons';




export default function Forgot({ navigation }) {

  const [Showvone, setShowvone] = useState(false);
  const f1 = useRef(null)

  const [Valueone, setValueone] = useState({
    mobileNo: "",


  });

  const handlePassword = () => {
    setShowvone(true)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "mobile": Valueone.mobileNo
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://13.127.119.21:5000/user/forget-password", requestOptions)
      .then(response => response.json())
      .then(result =>  navigation.navigate("Otp"))
    

      .catch(error => console.log('error', error));

  }


  return (<>
    <ScrollView>

      <View style={{ marginHorizontal: 25, marginTop: 40 }}>

        <Image
          style={styles.tinyLogo}
          source={require('../../assets/loginpic.png')}
        />
      </View>

      <View style={{ marginLeft: 30 }}>
        <Text style={{ fontSize: 36, fontFamily: 'Poppins-Regular', fontWeight: '500', color: '#1D1617' }}>{"Forgot\npassword?"}</Text>


        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular' }}>Don't worry! it happens. please enter the</Text>
          <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', marginTop: 5 }}>address associated with your account.</Text>


        </View>

        <View style={{ flexDirection: 'row', marginTop: 40 }}>
          {/* <Icon name="at" size={25} color={'#7B6F72'}/> */}

          <Image
            style={{ width: 20, height: 20, tintColor: '#7B6F72', marginTop: 10 }}
            source={require('../../assets/atthe.png')}
          />

          <TextInput ref={f1} onChangeText={(e) => setValueone({ ...Valueone, mobileNo: e })} value={Valueone.mobileNo} onBlur={() => { setShowvone(false) }} onFocus={() => { setShowvone(true) }} placeholder="Mobile number" style={{ fontSize: 16, color: '#ADA4A5', marginLeft: 10, fontFamily: 'Poppins-Regular' }}></TextInput>
        </View>

        <View style={{ borderBottomWidth: 2, width: '90%', borderColor: '#DEDEDE', marginTop: 5 }}>

        </View>

        <TouchableOpacity onPress={handlePassword}>
          <View style={{ alignItems: 'center', marginTop: 80, borderRadius: 20, borderWidth: 1, padding: 20, backgroundColor: '#3672E9', borderColor: '#1589FF', width: '90%' }}>
            <Text style={{ color: '#BFF4FF', fontSize: 18, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>Submit</Text>
          </View>
        </TouchableOpacity>




      </View>
      <View style={{ marginBottom: 200 }}>

      </View>
    </ScrollView>
  </>);

}

const styles = StyleSheet.create({

});