import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../Components/Header';

import Icontwo from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
// import MaskedView from '@react-native-masked-view/masked-view';

import borderframe from '../../assets/Frame';
import Allbadge from '../../assets/Badges';

const Dpbadge = props => {
  return (
    <>
      <TouchableOpacity
        onPress={() => props.setCurrbadge(props.id)}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 12,
          borderRadius: 200,
          height: 58,
          width: 58,
        }}>
        <View
          style={{
            padding: 3,
            position: 'absolute',
            top: 3,
            left: 3,
            height: 52,
            width: 52,
            borderRadius: 200,
          }}>
          <Image
            style={{height: '100%', width: '100%', borderRadius: 200}}
            source={props.badgepic}
          />
        </View>

        <Image
          style={{height: 58, width: 58, borderRadius: 200}}
          source={require('../../assets/pics/badgeborder.png')}
        />
      </TouchableOpacity>
    </>
  );
};

const Dpborder = props => {
  return (
    <>
      <TouchableOpacity
        onPress={() => props.setCurrframe(props.id)}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 12,
          borderRadius: 200,
          height: 58,
          width: 58,
        }}>
        {props.Currframe == props.id ? (
          <Image
            style={{
              position: 'absolute',
              top: 2,
              left: 2,
              height: 54,
              width: 54,
              borderRadius: 200,
            }}
            source={props.userpic}
          />
        ) : null}
        <Image
          style={{height: 58, width: 58, borderRadius: 200}}
          source={props.bframe}
        />
      </TouchableOpacity>
    </>
  );
};

const Dpcreatortwo = navigation => {
  const [Currframe, setCurrframe] = useState(0);
  const [Currbadge, setCurrbadge] = useState(0);
  const [Option, setOption] = useState(true);
  let userpic = require('../../assets/pics/dpcreate.png');

  return (
    <View
      style={{
        backgroundColor: '#F5E2F4',
        height: Dimensions.get('window').height,
        borderWidth: 1,
        borderColor: '#F3E6FA',
      }}>
      <LinearGradient
        colors={['#ffffff', '#ECDCF7']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={styles.card}>
          <Header navigation={navigation} title="Dp Creator" />
        </View>
      </LinearGradient>

      <View
        style={{
          width: '100%',
          height: 356,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '5%',
        }}>
        <View
          style={{
            height: 400,
            width: '100%',
            backgroundColor: '#fff',
            elevation: 5,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image style={{height: 400}} source={userpic} />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#F3E6FA',
          borderRadius: 6,
          height: 86,
          width: '100%',
          marginTop: 60,
          marginBottom: 18,
          elevation: 5,
        }}>
        {Option == true ? (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => setCurrframe(0)}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 12,
                borderRadius: 200,
                height: 58,
                width: 58,
                borderWidth: 3,
                borderColor: '#000',
              }}>
              <View
                style={{
                  position: 'absolute',
                  transform: [{rotate: '135deg'}],
                  top: 24,
                  width: '105%',
                  height: 1,
                  borderBottomColor: 'black',
                  borderBottomWidth: 3,
                }}
              />
            </TouchableOpacity>

            {borderframe.map((item, index) => {
              return (
                <>
                  <Dpborder
                    key={index}
                    id={index + 1}
                    Currframe={Currframe}
                    setCurrframe={e => {
                      setCurrframe(e);
                    }}
                    userpic={userpic}
                    bframe={item}
                  />
                </>
              );
            })}
          </ScrollView>
        ) : (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 12,
                borderRadius: 200,
                height: 58,
                width: 58,
                borderWidth: 3,
                borderColor: '#000',
              }}>
              <View
                style={{
                  position: 'absolute',
                  transform: [{rotate: '135deg'}],
                  top: 24,
                  width: '105%',
                  height: 1,
                  borderBottomColor: 'black',
                  borderBottomWidth: 3,
                }}
              />
            </TouchableOpacity>

            {Allbadge.map((item, index) => {
              return (
                <>
                  <Dpbadge
                    key={index}
                    id={index + 1}
                    Currbadge={Currbadge}
                    setCurrbadge={e => {
                      setCurrbadge(e);
                    }}
                    badgepic={item}
                  />
                </>
              );
            })}
          </ScrollView>
        )}
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity
          onPress={() => setOption(true)}
          style={{width: '45%'}}>
          <Framebtn Option={Option} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setOption(false)}
          style={{width: '45%'}}>
          <Badgebtn Option={Option} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Dpcreatortwo;

const Framebtn = props => {
  if (props.Option == true) {
    return (
      <>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <LinearGradient
            colors={['#A83882', '#DA3150', '#FA5539']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 0.0}}
            style={{
              height: 36,
              width: 36,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 82 / 2,
            }}>
            <View
              style={{
                margin: 4,
                padding: 2.8,
                backgroundColor: '#F3EAFD',
                borderRadius: 82 / 2,
              }}>
              <LinearGradient
                colors={['#A83882', '#DA3150', '#FA5539']}
                start={{x: 0.0, y: 1.0}}
                end={{x: 1.0, y: 0.0}}
                style={{
                  height: 27,
                  width: 27,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 82 / 2,
                }}></LinearGradient>
            </View>
          </LinearGradient>

          <Image
            style={{marginTop: 10}}
            source={require('../../assets/pics/textframe.png')}
          />
        </View>
      </>
    );
  } else {
    return (
      <>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#797979',
              height: 36,
              width: 36,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 82 / 2,
            }}>
            <View
              style={{
                margin: 4,
                padding: 2.8,
                backgroundColor: '#F3EAFD',
                borderRadius: 82 / 2,
              }}>
              <View
                style={{
                  backgroundColor: '#797979',
                  height: 27,
                  width: 27,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 82 / 2,
                }}></View>
            </View>
          </View>

          <Text style={{textAlign: 'center', color: '#797979', fontSize: 13}}>
            FramesvgfsxgfvxvdgaxZ
          </Text>
        </View>
      </>
    );
  }
};

const Badgebtn = props => {
  if (props.Option == true) {
    return (
      <>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 36,
              width: 36,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 82 / 2,
              borderWidth: 1.5,
              borderColor: '#797979',
              borderRadius: 200,
            }}>
            <Image
              style={{height: 36, width: 36}}
              source={require('../../assets/badgegraybr.png')}
            />
          </View>

          <Text style={{textAlign: 'center', color: '#797979', fontSize: 13}}>
            Badges & Emojis
          </Text>
        </View>
      </>
    );
  } else {
    return (
      <>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <LinearGradient
            colors={['#A83882', '#DA3150', '#FA5539']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 0.0}}
            style={{
              height: 36,
              width: 36,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 82 / 2,
            }}>
            <View
              style={{
                margin: 4,
                padding: 2.8,
                backgroundColor: '#F3EAFD',
                borderRadius: 82 / 2,
              }}>
              <LinearGradient
                colors={['#A83882', '#DA3150', '#FA5539']}
                start={{x: 0.0, y: 1.0}}
                end={{x: 1.0, y: 0.0}}
                style={{
                  height: 27,
                  width: 27,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 82 / 2,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#6C99F6',
                    height: 23,
                    width: 23,
                    borderRadius: 82 / 2,
                  }}>
                  <Image
                    style={{height: 15, width: 15}}
                    source={require('../../assets/rightblue.png')}
                  />
                </View>
              </LinearGradient>
            </View>
          </LinearGradient>

          <Image
            style={{marginTop: 10}}
            source={require('../../assets/pics/badgestext.png')}
          />
        </View>
      </>
    );
  }
};
