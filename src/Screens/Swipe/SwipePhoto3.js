import { View, Text } from 'react-native'
import React from 'react'

const SwipePhoto3 = () => {
  return (
    <View
        style={{
          marginTop:'66%',
          width: '100%',
          height: '22%',
          position: 'absolute',
          borderColor: 'white',
          borderWidth: 2,
          flexDirection: 'row',
        }}>
        <View
          style={{
           
            justifyContent: 'center',
            alignItems: 'center',
            width: '33.33%',
            height: '100%',
            borderColor: 'white',
            borderWidth: 2,
          }}>
          
        </View>
      
        <View
          style={{
            
            justifyContent: 'center',
            alignItems: 'center',
            width: '33.33%',
            height: '100%',

            borderColor: 'white',
            borderWidth: 2,
          }}>
        </View>
        <View
          style={{
            
            justifyContent: 'center',
            alignItems: 'center',
            width: '33.33%',
            height: '100%',

            borderColor: 'white',
            borderWidth: 2,
          }}>
        </View>
    </View>
  )
}

export default SwipePhoto3