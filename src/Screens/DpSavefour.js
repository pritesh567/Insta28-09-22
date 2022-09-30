import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import Imagecard from '../Components/ImageCard';
import Dpsaverhead from '../Components/Dpsaverhead';

// import { useContext } from 'react';
// import NoteContext from '../../Context/NoteContext';

const Dpsaverfour = ({navigation}) => {

    // const {globalfont} = useContext(NoteContext);
    // const [Ifont, setIfont] = globalfont;

    const Ifont = 'Poplin';

    const [people, setPeople] = useState([
        { title: "Amit_saswat", key: "1", username: "@Amit_saswat", image: require('../../assets/p1.png') },
        { title: "Amit_joshi", key: "2", username: "@Amit_joshi", image: require('../../assets/p2.png') },
        { title: "Amit_Goswami", key: "3", username: "@Amit_Goswami", image: require('../../assets/p3.png') },
        { title: "Amit_mittal", key: "4", username: "@Amit_mittal", image: require('../../assets/p4.png') },
        { title: "Amit_sahu", key: "5", username: "@Amit_sahu", image: require('../../assets/p5.png') },
        { title: "Amit_parida", key: "6", username: "@Amit_parida", image: require('../../assets/p6.png') },
    ]);

    return (
        <View>
            <Dpsaverhead navigation={navigation} searchval="" searchplacehold="Amit" />
            {/* <View style={{ paddingLeft: 25, backgroundColor: 'transparent', marginTop: 6, height: '100%' }}>

                <FlatList
                    data={people}
                    renderItem={({ item }) => (
                        <Imagecard title={item.title} username={item.username} image={item.image} />
                    )}
                />
            </View> */}


            <View style={{ paddingLeft: 25, height: '100%' }}>
                
                <FlatList
                    data={people}
                    renderItem={({ item }) => (
                        <Imagecard title={item.title} username={item.username} image={item.image} />
                    )}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Dpsaverfour;
