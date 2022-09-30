import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Imagecard from '../Components/ImageCard';
import Dpsaverhead from '../Components/Dpsaverhead';


// import { useContext } from 'react';
// import NoteContext from '../../Context/NoteContext';

const Dpsaverthree = ({navigation}) => {

    // const {globalfont} = useContext(NoteContext);
    // const [Ifont, setIfont] = globalfont;

    const Ifont = 'Poplin';

    const [people, setPeople] = useState([
        { title: "Vijay Rathore", key: "1", username: "@vijay_rathore", image: require('../../assets/pic1.png') },
        { title: "Amit Giri", key: "2", username: "@he_amit", image: require('../../assets/pic2.png') },
    ]);

    return (
        <View>
            <Dpsaverhead navigation={navigation} searchval="" searchplacehold="Search for keyword ( eg : dogs , Friends )" />
            <View style={{ backgroundColor: 'transparent' }}>

                <View style={{ marginLeft: 32, marginTop: 17, marginBottom: 15 }}>
                    <Text style={{ fontSize: 14, lineHeight: 16, fontWeight: '300', fontFamily: `${ Ifont }` }}>Recent Searches</Text>
                </View>

                <View style={{ paddingLeft: 25, height: '100%' }}>
                    <ScrollView style={{ width: '100%', height: '100%' }}>

                        {people.map(
                            item => {
                                return (
                                    <View key={item.key}>
                                        <Imagecard title={item.title} username={item.username} image={item.image} />
                                    </View>
                                )
                            }
                        )}


                        {/* <RadialGradient style={{ width: 200, height: 200 }}
                            colors={['black', 'green', 'blue', 'red']}
                            stops={[0.1, 0.4, 0.3, 0.75]}
                            center={[100, 100]}
                            radius={200}>

                        </RadialGradient> */}



                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Dpsaverthree;
