import { View, Text } from 'react-native'
import React from 'react'

const SwipePhoto2 = () => {
  return (
    <View
            style={{
              marginTop:'56%',
              width: '100%',
              height: '33%',
              position: 'absolute',
              borderColor: 'white',
              borderWidth: 2,
              flexDirection: 'row',
            }}>
            <View
              style={{
                
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%',
                height: '100%',
                borderColor: 'white',
                borderWidth: 2,
              }}>
              
            </View>
          
            <View
              style={{
               
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%',
                height: '100%',

                borderColor: 'white',
                borderWidth: 2,
              }}>
            </View>
        </View>
  )
}

export default SwipePhoto2