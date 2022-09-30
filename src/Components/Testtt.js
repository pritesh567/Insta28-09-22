import { View, Text,Image, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'


const Testtt = (props) => {
  return (
    <View>
    <View style={{width:130,height:130,borderWidth:1, borderColor:'red',}}>
    <ImageBackground style={{width:390,height:390}}source={require('../../Pic/boy.png')} />
    </View>

    </View>
    
  )
}

export default Testtt