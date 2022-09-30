import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, FlatList, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import Imagecard from '../Components/ImageCard';
import Dpsaverhead from '../Components/Dpsaverhead';
import LinearGradient from 'react-native-linear-gradient';

// import { useContext } from 'react';
// import NoteContext from '../../Context/NoteContext';

const Dpsavertwo = ({navigation}) => {

    // const {globalfont} = useContext(NoteContext);
    // const [Ifont, setIfont] = globalfont;

    const Ifont = 'Poplin';

    const [Animal, setAnimal] = useState([
        { key: "1", image: require('../../assets/animalpic/a1.png') },
        { key: "2", image: require('../../assets/animalpic/a2.png') },
        { key: "3", image: require('../../assets/animalpic/a3.png') },
        { key: "4", image: require('../../assets/animalpic/a4.png') },
        { key: "5", image: require('../../assets/animalpic/a5.png') },
        { key: "6", image: require('../../assets/animalpic/a6.png') },
        { key: "7", image: require('../../assets/animalpic/a7.png') },
        { key: "8", image: require('../../assets/animalpic/a8.png') },
        { key: "9", image: require('../../assets/animalpic/a9.png') },
        { key: "10", image: require('../../assets/animalpic/a10.png') },
        { key: "11", image: require('../../assets/animalpic/a11.png') },
        { key: "12", image: require('../../assets/animalpic/a12.png') },
        { key: "13", image: require('../../assets/animalpic/a13.png') },
        { key: "14", image: require('../../assets/animalpic/a14.png') },
        { key: "15", image: require('../../assets/animalpic/a15.png') },
        { key: "16", image: require('../../assets/animalpic/a16.png') },
        { key: "17", image: require('../../assets/animalpic/a17.png') },
        { key: "18", image: require('../../assets/animalpic/a18.png') },
    ]);





    return (
        <View style={{ backgroundColor: '#EFE8FF' }}>
            <View style={{ paddingHorizontal: 6 }}>
                <LinearGradient colors={['#ffffff', '#ECDCF7']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.24)' }}>
                    {/* <LinearGradient colors={['green', 'red']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ borderBottomLeftRadius: 24, borderBottomRightRadius: 24, }}> */}

                    <View style={{ paddingHorizontal: 1 }}>
                        <Dpsaverhead navigation={navigation} searchval="" searchplacehold="amit" />
                    </View>

                    <View style={{ paddingHorizontal: 4 }}>
                        <View style={{ marginTop: 8.5, borderRadius: 21, backgroundColor: "rgba(249, 250, 255, 0.35)" }}>

                            <View style={styles.headingCard}>
                                <TouchableOpacity onPress={()=> navigation.navigate('Dpsaverone')} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#3672E9', fontFamily: `${ Ifont }`, fontSize: 13, lineHeight: 19 }}>Recent Search</Text>
                                    <View style={styles.bshow1}></View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> navigation.navigate('Dpsavertwo')} style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#3672E9', fontWeight: '700', fontFamily: `${ Ifont }`, fontWeight: 'bold', fontSize: 13, lineHeight: 19 }}>Download</Text>
                                    <View style={styles.bshow2}></View>
                                </TouchableOpacity>
                            </View>

                            <ScrollView style={{ width: '100%', height: '100%' }}>
                                <View style={{ backgroundColor: 'transparent', marginTop: 18, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', paddingHorizontal: 2 }}>

                                    {Animal.map((Ani, index) => (
                                        <TouchableOpacity key={Ani.key} style={{ height: 105, width: 105, marginHorizontal: 3, marginVertical: 3 }}>
                                            <Image style={styles.image} source={Ani.image} />
                                        </TouchableOpacity>
                                    ))}

                                </View>
                            </ScrollView>

                        </View>
                    </View>
                </LinearGradient>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,

    },
    headingCard: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 23,

    },
    bshow1: {
        marginTop: 10,
        height: 5,
        width: 28,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        // backgroundColor: '#3672E9',
    },
    bshow2: {
        marginTop: 10,
        height: 5,
        width: 28,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        backgroundColor: '#3672E9',
    },
})

export default Dpsavertwo;
