import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import Dplist from '../Components/Dplist';
import Dpsaverhead from '../Components/Dpsaverhead';
import LinearGradient from 'react-native-linear-gradient';

// import { useContext } from 'react';
// import NoteContext from '../../Context/NoteContext';

const Dpsaverone = ({navigation}) => {

    // const {globalfont} = useContext(NoteContext);
    // const [Ifont, setIfont] = globalfont;

    const Ifont = "Poplin";
    
    return (
        <View style={{ backgroundColor: '#EFE8FF' }}>
            <View style={{ paddingHorizontal: 6 }}>


                <LinearGradient colors={['#ffffff', '#ECDCF7']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ borderBottomLeftRadius: 24, borderBottomRightRadius: 24, }}>
                    {/* <LinearGradient colors={['green', 'red']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{borderBottomLeftRadius: 24, borderBottomRightRadius: 24,}}> */}

                    <View style={{ paddingHorizontal: 1 }}>
                        <Dpsaverhead navigation={navigation} searchval="" searchplacehold="amit" />
                    </View>

                    <View style={{ paddingHorizontal: 4 }}>
                        <Dplist navigation={navigation} />
                    </View>
                </LinearGradient>
            </View>
        </View>
    );
}



export default Dpsaverone;
