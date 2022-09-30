import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, BackHandler, Alert, TextInput, TouchableOpacity, Dimensions, ImageBackground, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../Components/Header';

import Icontwo from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Dpsaverhead from '../Components/Dpsaverhead';


import Hometab from '../Components/Hometab';
import Test from '../Components/Test';

// import { useContext } from 'react';
// import NoteContext from '../../Context/NoteContext';




const Card = (props) => {
    // const {globalfont} = useContext(NoteContext);
    // const [Ifont, setIfont] = globalfont;

    const Ifont = 'Poplin';


    return (
        <>
            <TouchableOpacity onPress={() => { props.navigation.navigate(props.navItem) }} style={{ marginLeft: 15, marginRight: 4, height: 96, width: '43%', backgroundColor: '#fff', borderRadius: 21, flexDirection: 'row', paddingLeft: 20, marginTop: 13 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                    <View style={{ height: 46, width: 46, backgroundColor: '#4B4560', borderRadius: 200, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{ height: 20, width: 20, }}
                            source={props.img}
                        />
                    </View>
                    <Text style={{ textAlign: 'center', color: '#38344A', marginTop: 13, fontSize: 13, fontWeight: '500', fontFamily: `${Ifont}` }}>{props.title}</Text>
                </View>

            </TouchableOpacity>
        </>
    )
}




const Homepage = ({ navigation, route }) => {

    // const {globalfont} = useContext(NoteContext);
    // const [Ifont, setIfont] = globalfont;

    // const logout = route.params.logout;

    useEffect(() => {
        // const backAction = () => {
        //   Alert.alert("Hold on!", "Are you sure you want to go back?", [
        //     {
        //       text: "Cancel",
        //       onPress: () => null,
        //       style: "cancel"
        //     },
        //     { text: "YES", onPress: () => BackHandler.exitApp() }
        //   ]);
        //   return true;
        // };
    
    //     const backHandler = BackHandler.addEventListener(
    //       "hardwareBackPress",
    //       backAction
    //     );
    
    //     return () => backHandler.remove();
      }, []);

      


    const handleLougout = ()=>{
        // logout();
        navigation.navigate("Login");
    }
    

    const Ifont = 'Poplin';

    const [Currtab, setCurrtab] = useState(0);

    return (
        <View style={{ height: Dimensions.get('window').height, backgroundColor: '#F8F5FE' }} >
        <ScrollView >
            <View style={{ paddingHorizontal: 6, marginBottom: 13 }}>
                <LinearGradient colors={['#ffffff', '#ECDCF7']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.24)', borderBottomLeftRadius: 24, borderBottomRightRadius: 24, paddingHorizontal: 13, paddingTop: 35, paddingBottom: 14 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Text style={{ color: '#000', fontSize: 24, width: 245, marginLeft: 6, lineHeight: 27, height: 75 }}>What will you creat today ?</Text>
                        <TouchableOpacity onPress={()=>handleLougout()}>
                            <Image
                                style={{ height: 52, width: 52, marginRight: 4 }}
                                source={require("../../assets/Homepi/hme1.png")}
                            />
                        </TouchableOpacity>

                    </View>

                    <View style={{ marginTop: 20 }}>
                        <TextInput placeholder={"Search for keyword ( eg : dogs , Friends )"} placeholderTextColor={"#BFBBC2"} style={[{ fontFamily: `${Ifont}`, borderRadius: 14, backgroundColor: "#FCFBFF", color: '#000', height: 36, }, styles.textbox]}></TextInput>

                        <View style={{ position: 'absolute', right: 10, top: 7 }}>
                            <Icontwo name="search" size={20} color="#C6C0CC" />
                        </View>
                    </View>

                </LinearGradient>
            </View>

            
                <View>
                    <Hometab currentTab={(e) => setCurrtab(e)} />
                </View>

                <TabNav navigation={navigation} Currtab={Currtab} />

            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    text: {
      fontSize: 18,
      fontWeight: "bold"
    }
  });

export default Homepage;

const TabNav = (props) => {
    if (props.Currtab == 1) {
        return (
            <>
                <Download navigation={props.navigation} />
            </>
        )
    } else {
        return (
            <>
                <Toolkit navigation={props.navigation} />
            </>
        )
    }
}

const Toolkit = (props) => {
    return (
        <>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 20 }}>
                <Card navigation={props.navigation} navItem={"Upload"} img={require("../../assets/Homepi/hme12.png")} title="9 grid" />
                <Card navigation={props.navigation} navItem={"Tapherebio"} img={require("../../assets/Homepi/hme2.png")} title="Tap hear Bio" />
                <Card navigation={props.navigation} navItem={"Dpone"} img={require("../../assets/Homepi/hme3.png")} title="DP Creator" />
                <Card navigation={props.navigation} navItem={"Sapceadder"} img={require("../../assets/Homepi/hme4.png")} title="Space Adder" />
                <Card navigation={props.navigation} navItem={"Creativefonts"} img={require("../../assets/Homepi/hme5.png")} title="Creative font" />
                <Card navigation={props.navigation} navItem={"SwipePick"} img={require("../../assets/Homepi/hme6.png")} title="Swipe Photo" />
                <Card navigation={props.navigation} navItem={"Uploadimage"} img={require("../../assets/Homepi/hme7.png")} title="No crop post" />
                <Card navigation={props.navigation} navItem={"Dpsaverone"} img={require("../../assets/Homepi/hme8.png")} title="Repost" />
            </View>

        </>
    )
}

const Download = ({ navigation }) => {

    // const {globalfont} = useContext(NoteContext);
    // const [Ifont, setIfont] = globalfont;

    const Ifont = 'Poplin';

    const [Pics, setPics] = useState([
        { key: 1, imgpath: require("../../assets/Homepi/storylist/s1.png") },
        { key: 2, imgpath: require("../../assets/Homepi/storylist/s2.png") },
        { key: 3, imgpath: require("../../assets/Homepi/storylist/s3.png") },
        { key: 4, imgpath: require("../../assets/Homepi/storylist/s4.png") },
        { key: 5, imgpath: require("../../assets/Homepi/storylist/s1.png") },
        { key: 6, imgpath: require("../../assets/Homepi/storylist/s2.png") },
    ])

    return (
        <>

            <View>

                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{paddingLeft:18, height: 90 }}>

                <View>
                            <TouchableOpacity  style={{ flexDirection: 'row', alignItems: 'center', marginTop: 14 , marginRight:8}}>
                                <View style={{ height: 64, width: 64, position: 'absolute', top: 3, left: 3 , flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <Image
                                        style={{ height: '100%', width: '100%', borderRadius:200 }}
                                        source={require("../../assets/Homepi/storylist/sb.png")}
                                    />
                                </View>
                                <View style={{ height: 70, width: 70, }}>
                                    <Image
                                        style={{ height: '100%', width: '100%' }}
                                        source={require("../../assets/Homepi/storylist/sbr.png")}
                                    />
                                </View>
                            </TouchableOpacity>
                            </View>

                    {Pics.map((item) => {
                        return (
                            <View>
                            <TouchableOpacity  style={{ flexDirection: 'row', alignItems: 'center', marginTop: 14 , marginRight:8}}>
                                <View style={{ height: 64, width: 64, position: 'absolute', top: 3, left: 3 , flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <Image
                                        style={{ height: '100%', width: '100%', borderRadius:200 }}
                                        source={item.imgpath}
                                    />
                                </View>
                                <View style={{ height: 70, width: 70, }}>
                                    <Image
                                        style={{ height: '100%', width: '100%' }}
                                        source={require('../../assets/imageborder.png')}
                                    />
                                </View>
                            </TouchableOpacity>
                            </View>
                        )
                    })
                    }

                </ScrollView>
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 20 }}>
                <Card navigation={navigation} navItem={"Dpsaverone"} img={require("../../assets/Homepi/hme12.png")} title="DP Saver" />
                <Card navigation={navigation} navItem={"Sapceadder"} img={require("../../assets/Homepi/hme8.png")} title="IG tv Saver" />
                <Card navigation={navigation} navItem={"Dpcreateone"} img={require("../../assets/Homepi/hme3.png")} title="Story Saver" />
                <Card navigation={navigation} navItem={"Sapceadder"} img={require("../../assets/Homepi/hme13.png")} title="Reel Saver" />
            </View>
        </>
    )
}

