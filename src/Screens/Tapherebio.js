
import { StylesContext } from '@material-ui/styles';
import React from 'react';
import {View, Text, Button, Image, StyleSheet,Dimensions, TextInput, SafeAreaView,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';

const Tap=({navigation})=>{
  const win = Dimensions.get('window');
  return(
    <SafeAreaView>
    <LinearGradient 
  
    colors={['#DDCEFF','#F8DFF0']}
    style={{flex:1}}
    >
    <View>
    
      <View style={{ top:5,height:60,borderWidth: 3, borderColor:'rgba(255, 255, 255, 0.32)'}}>
      <TouchableOpacity  onPress={()=>navigation.push("Homepage")}>
        <Image source={require('../../assets/greater.png')} 
        style={{top:20,left:15}}
        /></TouchableOpacity>
        <Text style={{position:'absolute',alignSelf:'center',fontSize:24,fontFamily:'poppins',top:10,fontWeight:'200',fontStyle:'normal',color:'black'}}>Tap Hear Bio</Text>
      </View>
       <View style={{ top:15,height:115,borderWidth: 3, borderColor:'rgba(255, 255, 255, 0.32)',borderRadius: 12,width:370,left:8}}>
        <Image source={require('../../assets/Images/pick2.png')} style={{left:12,top:10,position:'absolute' }} />
        <Text style={{left:110,top:22,fontWeight:'bold'}}>Amit Giri</Text>
        <Text style={{left:110,top:22}}>@vijay_rathore</Text>
      </View>
      <View style={{position:'absolute'}}>
      <TextInput
              placeholder='taphere.bio/amitgiri'
              style={{backgroundColor:'#F8F3FE',borderRadius:12,borderColor:'rgba(255, 255, 255, 0.54)',borderWidth :2,top:150,left:115,height:30,width:251,padding:2}}
        />
       
      <Image source={require('../../assets/copy2.png')} 
        style={{height:13,width:13,alignSelf:'flex-end',Left:190,marginTop:130}}
        />
      </View>
     <TouchableOpacity>
     <View style={{left:320,top:480 }}>
     <Icon name="circle-with-plus" size={50} color='#808080' />
     </View></TouchableOpacity>
     </View>
     
   

  <TouchableOpacity onPress={()=>navigation.navigate("Tapherenext")}>
<View style={{position:'relative',height:45,
width:200,alignSelf:'center',borderRadius:15,
backgroundColor:'#3672E9',marginTop:win.height/1.2}}>
  <Text style={{fontSize:20,alignSelf: "center",top:8,color:'white'}}>Done</Text>
</View>
</TouchableOpacity>
</LinearGradient>
 </SafeAreaView>
  );
}
export default Tap;

