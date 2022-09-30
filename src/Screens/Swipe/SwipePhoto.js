import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../9Grid/Header';
import LinearGradient from 'react-native-linear-gradient';
import SwipePhoto2 from './SwipePhoto2';
import SwipePhoto3 from './SwipePhoto3';

const SwipePhoto = ({route, navigation}) => {
  const items = route.params;

  const [myPhoto, SetMyPic] = useState({
    uri: `data:${items.img.mime};base64,${items.img.data}`,
  });
  const[crop,setCrop] = useState(380);
  const[cropp,setCropp] = useState(450);
  const [option,setOption] = useState(null);

  const Press1 = () => {
    setCropp(450);
setOption(null);
  }

  const Press2 = () => {
    setCropp(233);
    setOption(2);
  }

  const Press3 = () => {
    setCropp(154);
    setOption(3);
  }


  return (
    <View>
      <LinearGradient
        colors={['#ffffff', '#E4D5F9']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{width: '100%', height: '100%'}}>
        <View style={{borderWidth:1.5, borderColor:'#F5E2F4'}}>
          <Header navigation={navigation} title="Swip Photo 1" />
        </View>

        <View
          style={{
            
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '65%',
            marginTop: '10%',
            
          }}>
          <Image style={{width: crop, height: cropp,}} source={myPhoto} />
         </View>

         {option == 2 ? <SwipePhoto2/> : null}
         {option == 3 ? <SwipePhoto3/> : null}

        <View style={{height:'8%',flexDirection:'row',justifyContent:'space-around' }}>
            <TouchableOpacity 
            onPress={Press1}
            style={{backgroundColor:'white', width:'25%',height:'70%',
            marginTop:'2%',borderRadius:10,elevation:5}}>
              <Text style={{alignSelf:'center',marginTop:'10%',color:'black'}}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={Press2}
            style={{backgroundColor:'white', width:'25%',height:'70%',
            marginTop:'2%',borderRadius:10,elevation:5}}>
              <Text style={{alignSelf:'center',marginTop:'10%',color:'black'}}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={Press3}
            style={{backgroundColor:'white', width:'25%',height:'70%',
            marginTop:'2%',borderRadius:10,elevation:5}}>
              <Text style={{alignSelf:'center',marginTop:'10%',color:'black'}}>3</Text>
            </TouchableOpacity>
        </View>


        <TouchableOpacity 
        onPress={()=>{alert("Image Downloaded Successfully")}}
            style={{backgroundColor:'#3672E9', width:'50%',height:'7%',
            marginTop:'2%',borderRadius:10, alignSelf:'center',elevation:5}}>
              <Text style={{alignSelf:'center',color:'white',marginTop:'6%'
                    ,fontSize:17}}>Apply</Text>
            </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default SwipePhoto;
