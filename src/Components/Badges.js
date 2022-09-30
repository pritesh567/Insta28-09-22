import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';





const Badges = (props) => {

// const [wid,SetWid]=useState(58);
// const [hei,SetHei]=useState(58);




  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
    style={{backgroundColor:'white', marginTop:'7%',padding:5 }}>
    
    <TouchableOpacity onPress={props.Put}>  
    <Image source={require('../../Frame/Ellipse103.png')} style={{height:58,width:58,margin:5}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.Put1}>  
    <Image source={require('../../Badges/badge1.png')} style={{height:58,width:58,margin:5}}/>
    </TouchableOpacity>
    <TouchableOpacity  onPress={props.Put2}>
      <Image source={require('../../Badges/badge2.png')} style={{height:58,width:58,margin:5}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.Put3}>
      <Image source={require('../../Badges/badge3.png')} style={{height:58,width:58,margin:5}}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={props.Put4}>
      <Image source={require('../../Badges/badge4.png')} style={{height:58,width:58,margin:5}}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={props.Put5}>
      <Image source={require('../../Badges/badge5.png')} style={{height:58,width:58,margin:5}}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={props.Put6}>
      <Image source={require('../../Badges/badge6.png')} style={{height:58,width:58,margin:5}}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={props.Put7}>
      <Image source={require('../../Badges/badge7.png')} style={{height:58,width:58,margin:5}}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={props.Put8}>
      <Image source={require('../../Badges/badge8.png')} style={{height:58,width:58,margin:5}}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={props.Put9}>
      <Image source={require('../../Badges/badge9.png')} style={{height:58,width:58,margin:5}}/>
      </TouchableOpacity>
      


      </ScrollView>
  )
};

export default Badges;