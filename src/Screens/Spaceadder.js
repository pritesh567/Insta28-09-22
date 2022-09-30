import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Header from '../Components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Clipboard from '@react-native-clipboard/clipboard';
// import { useContext } from 'react';
// import NoteContext from '../../Context/NoteContext';





const Card = (props) => {
    // const {globalfont} = useContext(NoteContext);
    // const [Ifont, setIfont] = globalfont;

    const Ifont = 'Poplin';

    const jewelStyle = function () {
        return {
            fontSize: 12,
            color: '#FFFFFF',
            marginLeft: 16,
            fontFamily: props.fontname,
        }
    }

    return (
        <View style={{ backgroundColor: 'black', height: 40, marginTop: 17, flexDirection: 'row', alignItems: 'center', borderRadius: 5 }}>
            <View>
                <Text style={jewelStyle()}>Try this new font in new way</Text>
                {/* <Text style={jewelStyle()}>{Ifont}</Text> */}
            </View>

            {/* <TouchableOpacity onPress={()=>{setIfont(props.fontname)}} style={[{ position: 'absolute', top: 12, right: 11 }, { fontFamily: props.fontname }]}> */}
            <TouchableOpacity onPress={() => { props.setTryfont(props.fontname) }} style={[{ position: 'absolute', top: 12, right: 11 }, { fontFamily: props.fontname }]}>
                <View style={{ backgroundColor: '#FFE600', height: 17, width: 55, borderRadius: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Rambla-Regular', color: '#000000', fontSize: 7 }}>Try this font</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const Sapceadder = ({ navigation }) => {

    // const {globalfont} = useContext(NoteContext);
    // const [Ifont, setIfont] = globalfont;

    const Ifont = 'Poplin';

    const [Tryfont, setTryfont] = useState(Ifont);

    const [text, onChangeText] = React.useState("");

    const items = [
        { key: "1", fontname: "Rajdhani-Regular" },
        { key: "2", fontname: "Rambla-Regular" },
        { key: "3", fontname: "RammettoOne-Regular" },
        { key: "4", fontname: "Ranchers-Regular" },
        { key: "5", fontname: "Rancho-Regular" },
        { key: "6", fontname: "Rasa-Regular" },
        { key: "7", fontname: "RedHatDisplay-Bold" },
        { key: "8", fontname: "ReenieBeanie-Regular" },
        { key: "9", fontname: "Revalia-Regular" },
        { key: "10", fontname: "RhodiumLibre-Regular" },
        { key: "11", fontname: "RibeyeMarrow-Regular" },
        { key: "12", fontname: "RibeyeMarrow-Regular" },
    ]


    return (
        <View style={{ height: Dimensions.get('window').height }}>
            <LinearGradient colors={['#ffffff', '#ECDCF7']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ borderBottomWidth: .5, borderBottomColor: 'rgba(255, 255, 255, 0.24)' }}>
                <Header navigation={navigation} title="Space adder" />
            </LinearGradient>

            <LinearGradient colors={['#ffffff', '#ECDCF7']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} >
                <View style={{ height: '100%' }}>

                    {/* <View style={{ paddingLeft: 30, paddingRight: 30, marginTop: 28.5 }}> */}
                    {/* <View style={{  height: 40, flexDirection: 'row', alignItems: 'center', borderRadius: 5 }}> */}
                    {/* <View style={{ width: '100%', }}> */}
                    {/* <TextInput placeholder="Write something cool" placeholderTextColor="#fff" style={{ borderRadius: 5, width: '100%', color: '#fff', fontSize: 12, fontFamily: 'Poppins', fontWeight: '300', }} ></TextInput> */}
                    {/* </View> */}
                    {/* </View> */}
                    {/* </View> */}
                    <TextInput multiline={true} value={text} onChangeText={onChangeText} placeholder="Write something cool and then" placeholderTextColor="#000" style={{paddingLeft:30, borderRadius: 5, width: '100%', color: '#000', fontSize: 11, fontFamily: `${Tryfont}`, fontWeight: '300', }} ></TextInput>

                    <Text style={{ paddingLeft: 30, color: '#000', fontSize: 15, fontWeight: '300' }}>Add</Text>
                    <Text style={{ paddingLeft: 31, color: '#000', fontSize: 15, marginTop: 25, fontWeight: '300' }}>Spaces</Text>

                    <Text style={{ fontFamily: `${Ifont}`, color: 'rgba(0, 0, 0, 0.4)', fontSize: 10, fontWeight: '300', marginLeft: 31, marginBottom: 18, marginTop: 29 }}>Suggested search History</Text>

                    <View style={{ paddingLeft: 25, paddingRight: 30, flex: 1 }}>
                        <ScrollView style={{ width: '100%', height: '100%' }}>
                            {items.map(
                                item => {
                                    return (
                                        <View key={item.key}>
                                            <Card fontname={item.fontname} setTryfont={setTryfont} />
                                        </View>
                                    )
                                }
                            )}

                            <View style={{ height: 200 }}></View>
                        </ScrollView>
                    </View>

                    <View style={{ position: 'absolute', bottom: 80, width: '100%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                            <View style={{ backgroundColor: '#3672E9', height: 59, borderRadius: 15, paddingHorizontal: 93, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <TouchableOpacity onPress={()=>{setIfont(Tryfont)}}> */}
                                <TouchableOpacity onPress={() => {Clipboard.setString(text) }}>
                                    <Text style={{ fontFamily: `${Ifont}`, fontSize: 18, color: '#fff', width: '100%', fontWeight: '400' }}>Copy Text</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Sapceadder;
