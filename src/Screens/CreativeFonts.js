import React, {useState} from 'react';
import { View, StyleSheet, Text, Alert,ScrollView, TextInput, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Header from '../Components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Clipboard from '@react-native-clipboard/clipboard';
import { SafeAreaView } from 'react-native-safe-area-context';

// import { useContext } from 'react';
// import NoteContext from '../../Context/NoteContext';

const Card = (props) => {
    const win = Dimensions.get('window');
   // const {globalfont} = useContext(NoteContext);
    // const [Ifont, setIfont] = globalfont;

    const Ifont = 'Poplin';

    const jewelStyle = function () {
        return {
            fontSize: 14,
            color: '#FFFFFF',
            marginLeft: 16,
            fontFamily: props.fontname,
        }
    }

    return (
        <View style={{ backgroundColor: 'black', height: 40, marginTop: 17, flexDirection: 'row', alignItems: 'center', borderRadius: 5 }}>
            <View>
                <Text style={jewelStyle()}>Try this new font in new way</Text>
                
            </View>

           
            <TouchableOpacity onPress={()=>{props.setTryfont(props.fontname)}} style={[{ position: 'absolute', top: 12, right: 11 }, { fontFamily: props.fontname }]}>
                <View style={{ backgroundColor: '#FFE600', height: 17, width: 55, borderRadius: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Rambla-Regular', color: '#000000', fontSize: 7 }}>Try this font</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const Creativefonts = ({navigation}) => {

    // const {globalfont} = useContext(NoteContext);
    // const [Ifont, setIfont] = globalfont;
    const Alertt = () =>
    Alert.alert(
        
      "Copied to clipboard",
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => console.log("Cancel Pressed"),
    //       style: "cancel"
    //     },
    //     { text: "OK", onPress: () => console.log("OK Pressed") }
    //   ]
    );

    const onPress = () => {
        // Alertt();
        copyIt();
      };
    const Ifont = 'Poplin';

    const [Tryfont, setTryfont] = useState(Ifont);

    const [text, onChangeText] = React.useState("");
    const copyIt = ()=> Clipboard.setString(courseName)
    const [courseName, setCourseName] = useState ("")
const onChangName = (value) => {
  setCourseName(value)
}
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
        <SafeAreaView>
        <View style={{ height: Dimensions.get('window').height }}>
            <LinearGradient colors={['#ffffff', '#ECDCF7']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ borderBottomWidth: .5, borderBottomColor: 'rgba(255, 255, 255, 0.24)' }}>
                <Header navigation={navigation} title="Creative Fonts" />
            </LinearGradient>

            <LinearGradient colors={['#ffffff', '#ECDCF7']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} >
                <View style={{ height: '100%' }}>

                    <View style={{ paddingLeft: 25, paddingRight: 30, marginTop: 28.5 }}>
                        <View style={{ backgroundColor: '#000', height: 40, flexDirection: 'row', alignItems: 'center', borderRadius: 5 }}>
                            <View style={{ width: '100%', paddingHorizontal: 16 }}>
                                
                                <TextInput value={courseName} onChangeText={onChangName} placeholder="Write something cool" placeholderTextColor="#fff" style={{ borderRadius: 5, width: '100%', color: '#fff', fontSize: 12, fontFamily: `${ Tryfont }`, fontWeight: '300', }} ></TextInput>
                            </View>
                        </View>
                    </View>

                    <Text style={{ fontFamily: `${ Ifont }`, color: 'rgba(0, 0, 0, 0.4)', marginLeft: 31, marginBottom: 6, marginTop: 29 }}>Type something and take your pick</Text>

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

                    <View style={{ position: 'absolute', bottom: 90, width: '100%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                            <View style={{ backgroundColor: '#3672E9', height: 59, borderRadius: 15, paddingHorizontal: 93, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      
                                <TouchableOpacity onPress={onPress}>
                                    <Text style={{ fontFamily: `${ Ifont }`, fontSize: 18, color: '#fff', width: '100%', fontWeight: '400' }}>Copy Text</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Creativefonts;