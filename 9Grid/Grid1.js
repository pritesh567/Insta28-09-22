import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../src/Components/Header';
import Nav from 'react-native-vector-icons/Fontisto';
import Grid33 from './RatioGrid/Grid33';
import Grid13 from './RatioGrid/Grid13';
import Grid31 from './RatioGrid/Grid31';
import Grid32 from './RatioGrid/Grid32';
import Grid23 from './RatioGrid/Grid23';


const Grid1 = ({props, route,navigation}) => {
    const items = route.params;
    const [myPhoto, SetMyPic] = useState({
        uri: `data:${items.img.mime};base64,${items.img.data}`,
      });

      const[grid,setGrid ] = useState(null);
      const[wid,setWid] = useState(390);
      const[hie,setHie] = useState(390);

      const PutGrid1 = () => {
        setGrid(13);
        setWid(130);
        setHie(390);
      }
      const PutGrid2 = () => {
        setGrid(23);
        setWid(260);
        setHie(390);

      }
      const PutGrid3 = () => {
        setHie(260);
        setWid(390);
        setGrid(32);

      }
      const PutGrid4 = () => {
        setGrid(31);
        setHie(130);
        setWid(390);

      }
      const PutGrid5 = () => {
        setGrid(33);
        setWid(390);
        setHie(390);

      }

      return (
        <View>
          <LinearGradient
            colors={['#ffffff', '#E4D5F9']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{width: '100%', height: '100%'}}>
            <View style={{borderWidth:1.5, borderColor:'#F5E2F4'}}>
              <Header navigation={navigation} title="9 Grid" />
            </View>
    
            <View
              style={{
                
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '55%',
                marginTop: '20%',
                
              }}>
              <Image style={{width:wid, height: hie,}} source={myPhoto} />
            {grid == 13 ? <Grid13/> : null}
            {grid == 23 ? <Grid23/> : null}
            {grid == 33 ? <Grid33/> : null}
            {grid == 32 ? <Grid32/> : null}
            {grid == 31 ? <Grid31/> : null}




             
            </View>
            
            
           <View style={{ width:'90%',marginLeft:"5%", flexDirection:'row',
              marginTop:'5%', justifyContent:'space-between'}}>
              
               <TouchableOpacity onPress={PutGrid1}> 
               <Image style={{width:30,height:50,borderColor:'grey',borderWidth:0.1}} source={require('./GridBox/Group27.png')}/> 
               </TouchableOpacity>
               <TouchableOpacity onPress={PutGrid2}> 
               <Image style={{width:30,height:50,borderColor:'grey',borderWidth:0.1}} source={require('./GridBox/Group26.png')}/> 
               </TouchableOpacity>
               <TouchableOpacity onPress={PutGrid3}> 
               <Image style={{width:30,height:50,borderColor:'grey',borderWidth:0.1}} source={require('./GridBox/Group25.png')}/> 
               </TouchableOpacity>
               <TouchableOpacity onPress={PutGrid4}> 
               <Image style={{width:30,height:50,borderColor:'grey',borderWidth:0.1}} source={require('./GridBox/Group24.png')}/> 
               </TouchableOpacity>
               <TouchableOpacity onPress={PutGrid5}> 
               <Image style={{width:30,height:50 ,borderColor:'grey',borderWidth:0.1}} source={require('./GridBox/Group23.png')}/> 
               </TouchableOpacity>
                
            </View>

            
        <TouchableOpacity 
        onPress={()=>{alert("Image Downloaded Successfully");
                        setGrid(null);
                         setHie(390);
                        setWid(390) }}
            style={{backgroundColor:'#3672E9', width:'70%',height:'7%',
            marginTop:'5%',borderRadius:10, alignSelf:'center',elevation:5}}>
              <Text style={{alignSelf:'center',color:'white',marginTop:'5%'
                    ,fontSize:17}}>Crop it</Text>
            </TouchableOpacity>

    </LinearGradient>
    </View>
  )
};

export default Grid1;