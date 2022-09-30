
// import React from 'react';
// import {View, StyleSheet, Text} from 'react-native';
// import GridImageView from 'react-native-grid-image-viewer';



//     const Super = ({props, route,navigation}) => {
  
//         const img = route.params.img;
//         //   const source = [
//         //     (`data:${item.img.mime};base64,${item.img.data}`),
//         //     (`data:${item.img.mime};base64,${item.img.data}`),
//         //     (`data:${item.img.mime};base64,${item.img.data}`),
//         //   ];

//     // const data = [
//     //    const url1=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqe5muqrlSXq3ZbIf5sRlU-VXoN3MNCUUhQ&usqp=CAU'];
       
      
    
//         // url2='https://photos.smugmug.com/photos/i-PWFKRvP/1/M/i-PWFKRvP-M.jpg',
        
      
    
//         // url3= 'https://photos.smugmug.com/photos/i-bs5mHJD/2/M/i-bs5mHJD-M.jpg',
       
    
    
//         // url4='https://photos.smugmug.com/photos/i-qkDzWVN/1/M/i-qkDzWVN-M.jpg',
       
    
//     // ];
//   return (
//     <View style={styles.background}>
//       <Text style={styles.headline_text}>Grid View Images</Text>
//       <Text style={styles.explore_text}>
//         Click on an image to view in full screen mode
//       </Text>
//     <GridImageView data={route.params.img} heightOfGridImage={500} />
//       {/* Basic Usage */}
//       {/* <GridImageView url1={['url1', 'url2', 'url3', 'url4']} /> */}
//       {/* <GridImageView data={[ 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqe5muqrlSXq3ZbIf5sRlU-VXoN3MNCUUhQ&usqp=CAU', 'https://image3.mouthshut.com/images/imagesp/925791837s.jpg' , 'https://9to5mac.com/wp-content/uploads/sites/6/2016/11/15-touch-bar-macbook-pro-tips-and-tricks1.jpg?quality=82&strip=all' , 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8c29mdHdhcmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80' ]} /> */}
    
//     </View>
//   );
// };



// const styles = StyleSheet.create({
//   background: {
//     backgroundColor: 'white',
//     flex: 1,
//   },
//   headline_text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginTop: 50,
//     marginLeft: 20,
//   },
//   explore_text: {
//     marginTop: 5,
//     marginBottom: 10,
//     color: '#fff',
//     marginLeft: 20,
//     fontSize: 12,
//     fontWeight: '600',
//   },
// });

// export default Super;

import { Text, View ,Image, ScrollView} from 'react-native'
import React, { Component ,useState} from 'react'
import { Dimensions } from "react-native";
const win = Dimensions.get('window');

const Super = ({props, route,navigation}) => {
    let items = route.params;

    const [Mypic, setMypic] =useState ({uri: `data:${items.img.mime};base64,${items.img.data}`});
   
    return (
        <ScrollView >
        <View 
      style={{flexDirection:'column',margin:1,height:600}}>
    <Image
  style={{
    width: win.width/3,
    height: win.height/1,
    borderWidth:9,
    // flexWrap:'wrap',
    // flexDirection:"row",
    // resizeMode: 'stretch'
    alignSelf: 'flex-start',
    borderWidth: 1,
 aspectRatio: 0.5, 
 margin:3,
    borderRadius: 20,
    borderColor:'#fff'
    // x:0,
    // y:1
  }}
  source={Mypic}

/>   

<Image
  style={{
    width: win.width/3,
    height: win.height/1,
    // flexWrap:'wrap',
    // flexDirection:"row",
    // resizeMode: 'repeat',
    alignSelf: 'center',
    borderWidth: 3,
    aspectRatio:1.5,
    margin:3,
    borderColor:'#fff',
   
    position:'absolute'
  }}
  source={Mypic}
/>

<Image
  style={{
    width: win.width/3,
    height: win.height/1,
    // flexWrap:'wrap',
    // flexDirection:"row",
    // resizeMode: 'repeat',
    alignSelf: 'center',
    borderWidth: 2,
    position:'absolute',
    // aspectRatio:-2.5,
    margin:3,
    borderColor:'#fff',
    // borderRadius: 20,
    // x:0,
    // y:1
  }}
  source={Mypic}
// 
/>
      </View>
      </ScrollView>
    );
  };


export default Super;