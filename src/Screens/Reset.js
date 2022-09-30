import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity,Image,TextInput} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import User from 'react-native-vector-icons/MaterialCommunityIcons';
import Simple from 'react-native-vector-icons/SimpleLineIcons';



export default function Reset({navigation}) {

  return (<>
  <ScrollView>

  <View style={{marginHorizontal:25,marginTop:40}}>

  <Image
            style={styles.tinyLogo}
            source={require('../../assets/loginpic.png')}
          />
  </View>

  <View style={{marginLeft:30}}>
    <Text style={{fontSize:36,fontWeight:'500',color:'#1D1617',fontFamily:'Poppins-Regular',lineHeight:40}}>{"Reset\npassword?"}</Text>
    
    <View style={{}}>
    
    </View>
  
    <View style={{marginTop:30}}>
    <Text style={{fontSize:12,fontFamily:'Poppins-Regular'}}>Don't worry! it happens. please enter the</Text>
    <Text style={{fontSize:12,fontFamily:'Poppins-Regular',marginTop:5}}>address associated with your account.</Text>


    </View>
    
    <View style={{flexDirection:'row',marginTop:30}}>
    {/* <Simple name="lock" size={20} color={'#ADA4A5'}/> */}

    <Image
            style={{width:17,height:24,tintColor:'#7B6F72',marginTop:10}}
            source={require('../../assets/vector.png')}
          />

      <TextInput style={{fontSize:16,color:'#ADA4A5',marginLeft:10,fontFamily:'Poppins-Regular'}}> New password</TextInput>
    </View>
    
    <View style={{borderBottomWidth:2,width:'90%',borderColor:'#DEDEDE'}}>

    </View>



    <View style={{flexDirection:'row',marginTop:30}}>
    {/* <Simple name="lock" size={20} color={'#ADA4A5'}/> */}

    <Image
            style={{width:17,height:24,tintColor:'#7B6F72',marginTop:10}}
            source={require('../../assets/vector.png')}
          />

      <TextInput style={{fontSize:16,color:'#ADA4A5',marginLeft:10,fontFamily:'Poppins-Regular'}}> Confirm new password</TextInput>
    </View>
    
    <View style={{borderBottomWidth:2,width:'90%',borderColor:'#DEDEDE'}}>

    </View>

<TouchableOpacity onPress={()=> navigation.navigate('Homepage')}>
    <View style={{alignItems:'center',marginTop:80,borderRadius:20,borderWidth:1,padding:20,backgroundColor:'#3672E9',borderColor:'#1589FF',width:'90%'}}>
    <Text style={{color:'#BFF4FF',fontSize:18,fontFamily:'Poppins-Regular',fontWeight:'700'}}>Submit</Text>
    </View>
    </TouchableOpacity>


    

  </View>
  <View style={{marginBottom:200}}></View>
  </ScrollView>
  
</>);


}

const styles = StyleSheet.create({

});