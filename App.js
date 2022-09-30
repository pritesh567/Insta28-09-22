import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Dpsaverone from './src/Screens/DpSaverone';
import Dpsavertwo from './src/Screens/Dpsavertwo';
import Dpsaverthree from './src/Screens/DpSaverthree';
import Dpsaverfour from './src/Screens/DpSavefour';
import Creativefonts from './src/Screens/CreativeFonts';
import Imageviewer from './src/Screens/ImageViewer';
import Login from './src/Screens/Login';
import Uploadimage from './src/Screens/UploadImage';
import Nocropboxletterbox from './src/Screens/Nocropboxletterbox';
import Dpcreateone from './src/Screens/Dpcreateone';
import Dpcreatortwo from './src/Screens/Dpcreatortwo';
import Sapceadder from './src/Screens/Spaceadder';
import Homepage from './src/Screens/Homepage';
import Tapherebio from './src/Screens/Tapherebio'

import Test from './src/Components/Test';
import Imagecrop from './src/Screens/Imagecrop';
import Tempupload from './src/Screens/Tempupload';
import Sample2 from './9Grid/Sample2';
// import Fbloginpage from './src/Screens/Fbloginpage';
import Mylogin from './src/Screens/Mylogin'
// import Flogin from './src/Screens/Flogin';
import Instalogin from './src/Screens/InstaLogin';
import Signup from './src/Screens/Signup';
import Forgot from './src/Screens/Forgot';
import Reset from './src/Screens/Reset';
import Dpcreator from './src/Screens/Dpcreator';
import Otp from './src/Screens/Otp';
import DpFinal from './src/Screens/DpFinal';
import DpTwo from './DP/DpTwo';
import Dpone from './DP/Dpone';
import Sample from './9Grid/Sample';
import SwipePick from './SwipePick';
import Swipe1 from './Swipe1';
import Swipe2 from './Swipe2';
import Swipe3 from './Swipe3';
import Super from './Super';
import DpPick from './DP/DpPick';
import Tapherenext from './src/Screens/Tapherenext';

// 9gird
import Upload from './9Grid/Upload'
import NoCropBox from './9Grid/NoCropBox'
import Header from './9Grid/Header'



import Sample3 from './9Grid/Sample3';
import Dp2 from './DP/Dp2';
import SwipePhoto from './src/Screens/Swipe/SwipePhoto';
import Grid1 from './9Grid/Grid1';
import ImgCrop from './src/Components/ImgCrop';


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen1</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home2')}><Text>Next</Text></TouchableOpacity>
    </View>
  );
}

function Screen2() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen2</Text>
      <TouchableOpacity onPress={()=>{console.log('helo')}}><Text>Next</Text></TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      
      


     

      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="Dpcreator" component={Dpcreator} />
      <Stack.Screen options={{ headerShown: false }} name="DpPick" component={DpPick} />
      <Stack.Screen options={{ headerShown: false }} name="DpFinal" component={DpFinal} />
      <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
      <Stack.Screen options={{ headerShown: false }} name="Forgot" component={Forgot} />
      <Stack.Screen options={{ headerShown: false }} name="Reset" component={Reset} />
      <Stack.Screen options={{ headerShown: false }} name="Otp" component={Otp} />
      <Stack.Screen options={{ headerShown: false }} name="Tapherenext" component={Tapherenext} />

      <Stack.Screen options={{ headerShown: false }} name="SwipePick" component={SwipePick} />
      <Stack.Screen options={{ headerShown: false }} name="SwipePhoto" component={SwipePhoto} />

      <Stack.Screen options={{ headerShown: false }} name="Homepage" component={Homepage} />


      <Stack.Screen options={{ headerShown: false }} name="Upload" component={Upload} />
      <Stack.Screen options={{ headerShown: false }} name="Grid1" component={Grid1} />
      
      <Stack.Screen options={{ headerShown: false }} name="Sample3" component={Sample3} />
      <Stack.Screen options={{ headerShown: false }} name="Sample2" component={Sample2} />
      {<Stack.Screen options={{ headerShown: false }} name="Sample" component={Sample} />}

      
      <Stack.Screen options={{ headerShown: false }} name="Swipe1" component={Swipe1} />
      <Stack.Screen options={{ headerShown: false }} name="Swipe2" component={Swipe2} />
      <Stack.Screen options={{ headerShown: false }} name="Swipe3" component={Swipe3} />


      <Stack.Screen options={{ headerShown: false }} name="Dpone" component={Dpone} />
      <Stack.Screen options={{ headerShown: false }} name="DpTwo" component={DpTwo} />
      <Stack.Screen options={{ headerShown: false }} name="Dp2" component={Dp2} />

        <Stack.Screen options={{ headerShown: false }} name="Instalogin" component={Instalogin} />
        {/* <Stack.Screen options={{ headerShown: false }} name="Flogin" component={Flogin} /> */}
        <Stack.Screen options={{ headerShown: false }} name="Mylogin" component={Mylogin} />
        <Stack.Screen options={{ headerShown: false }} name="Dpcreatortwo" component={Dpcreatortwo} />
        <Stack.Screen options={{ headerShown: false }} name="Tempupload" component={Tempupload} />
        <Stack.Screen options={{ headerShown: false }} name="Dpcreateone" component={Dpcreateone} />
        <Stack.Screen options={{ headerShown: false }} name="Uploadimage" component={Uploadimage} />
        <Stack.Screen options={{ headerShown: false }} name="Imagecrop" component={Imagecrop} />
        <Stack.Screen options={{ headerShown: false }} name="Test" component={Test} />
        <Stack.Screen options={{ headerShown: false }} name="Sapceadder" component={Sapceadder} />
        {/* <Stack.Screen options={{ headerShown: false }} name="Fbloginpage" component={Fbloginpage} /> */}
        <Stack.Screen options={{ headerShown: false }} name="Imageviewer" component={Imageviewer} />
        <Stack.Screen options={{ headerShown: false }} name="Nocropboxletterbox" component={Nocropboxletterbox} />
        <Stack.Screen options={{ headerShown: false }} name="Creativefonts" component={Creativefonts} />
        <Stack.Screen options={{ headerShown: false }} name="Dpsaverfour" component={Dpsaverfour} />
        <Stack.Screen options={{ headerShown: false }} name="Dpsaverthree" component={Dpsaverthree} />
        <Stack.Screen options={{ headerShown: false }} name="Dpsavertwo" component={Dpsavertwo} />
        <Stack.Screen options={{ headerShown: false }} name="Dpsaverone" component={Dpsaverone} />
        <Stack.Screen options={{ headerShown: false }} name="Home1" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home2" component={Screen2} />
        <Stack.Screen options={{ headerShown: false }} name="Tapherebio" component={Tapherebio} />

      {/* <Stack.Screen options={{ headerShown: false }} name="Otp" component={Otp} /> */}
      
      

      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;







