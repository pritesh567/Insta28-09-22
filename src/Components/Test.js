import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Animated
} from 'react-native';



const Test=()=> {
  const [scrollX, setscrollX] = useState(new Animated.Value(0));


  const someFunction2 = () => {
    return {marginLeft : 20 ,
        height: profileImageHeight2,
        width: profileImageWidth2,
        overflow: 'hidden',
        marginTop: profileImageMargin2,
        marginLeft: 10
    };
}
  const someFunction3 = () => {
    return {marginLeft : 20 ,
      height: profileImageHeight3,
      width: profileImageWidth3,
      overflow: 'hidden',
      marginTop: profileImageMargin3,
      marginLeft: 10
    };
}

  const HEADER_MAX_HEIGHT = 120;
  const HEADER_MIN_HEIGHT = 70;

  const PROFILE_IMAGE_MAX_HEIGHT = 231;
  const PROFILE_IMAGE_MIN_HEIGHT = 231;

  const PROFILE_IMAGE_MAX_WIDTH = 153;
  const PROFILE_IMAGE_MIN_WIDTH = 153;


  const PROFILE_IMAGE_MAX_HEIGHT2 = 231;
  const PROFILE_IMAGE_MIN_HEIGHT2 = 179;

  const PROFILE_IMAGE_MAX_WIDTH2 = 153;
  const PROFILE_IMAGE_MIN_WIDTH2 = 118;

  const PROFILE_IMAGE_MAX_MARGIN2 = 30;
  const PROFILE_IMAGE_MIN_MARGIN2 = 0;
  
  const PROFILE_IMAGE_MAX_HEIGHT3 = 231;
  const PROFILE_IMAGE_MIN_HEIGHT3 = 179;
 
  const PROFILE_IMAGE_MAX_WIDTH3 = 153;
  const PROFILE_IMAGE_MIN_WIDTH3 = 118;

  const PROFILE_IMAGE_MAX_MARGIN3 = 30;
  const PROFILE_IMAGE_MIN_MARGIN3 = 0;
   
    const profileImageHeight = scrollX.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_IMAGE_MIN_HEIGHT, PROFILE_IMAGE_MAX_HEIGHT],
      extrapolate: 'clamp'
    });

    const profileImageHeight2 = scrollX.interpolate({
      inputRange: [0, 120],
      outputRange: [PROFILE_IMAGE_MIN_HEIGHT2, PROFILE_IMAGE_MAX_HEIGHT2],
      extrapolate: 'clamp'
    });

    const profileImageHeight3 = scrollX.interpolate({
      inputRange: [0, 300],
      outputRange: [PROFILE_IMAGE_MIN_HEIGHT3, PROFILE_IMAGE_MAX_HEIGHT3],
      extrapolate: 'clamp'
    });




    const profileImageWidth = scrollX.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [PROFILE_IMAGE_MIN_WIDTH, PROFILE_IMAGE_MAX_WIDTH],
        extrapolate: 'clamp'
      });
    const profileImageWidth2 = scrollX.interpolate({
        inputRange: [0, 120],
        outputRange: [PROFILE_IMAGE_MIN_WIDTH2, PROFILE_IMAGE_MAX_WIDTH2],
        extrapolate: 'clamp'
      });
      const profileImageWidth3 = scrollX.interpolate({
          inputRange: [0, 300],
          outputRange: [PROFILE_IMAGE_MIN_WIDTH3, PROFILE_IMAGE_MAX_WIDTH3],
          extrapolate: 'clamp'
        });
        
        
        
        const profileImageMargin2 = scrollX.interpolate({
            inputRange: [0, 120],
            outputRange: [PROFILE_IMAGE_MAX_MARGIN2 , PROFILE_IMAGE_MIN_MARGIN2],
            extrapolate: 'clamp'
          });
        const profileImageMargin3 = scrollX.interpolate({
            inputRange: [0, 300],
            outputRange: [PROFILE_IMAGE_MAX_MARGIN3 , PROFILE_IMAGE_MIN_MARGIN3],
            extrapolate: 'clamp'
          });
    

    const headerZindex = scrollX.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 120],
      outputRange: [0, 0, 1000],
      extrapolate: 'clamp'
    });

    
    return (
      <View style={{ flex: 1 }}>
    
        <ScrollView
        horizontal={true} 
          style={{ flex:1}}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } }
          ])}
        >
          <Animated.View
            style={{
              height: profileImageHeight,
              width: profileImageWidth,
              overflow: 'hidden',
            //   marginTop: profileImageMarginTop,
              marginLeft: 10
            }}
          >
          
            <Image
              source={require("../../assets/Homepi/hme9.png")}
              style={{ flex: 1, width: null, height: null }}
            />
            
          </Animated.View>


          <Animated.View
            style={someFunction2(2)}
          >
            <Image
              source={require("../../assets/Homepi/hme10.png")}
              style={{ flex: 1, width: null, height: null }}
            />
            
          </Animated.View>

          
          <Animated.View
            style={someFunction3(3)}
          >
            <Image
              source={require("../../assets/Homepi/hme11.png")}
              style={{ flex: 1, width: null, height: null , borderRadius:23}}
            />
            
          </Animated.View>


          <View style={{width:220}}>

          </View>

          <View style={{ height: 1000 }} />
        </ScrollView>
      </View>
    );
  }

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


