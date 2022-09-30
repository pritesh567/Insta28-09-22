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

const Hometab = props => {
  const [Currentitem, setCurrentitem] = useState({
    height: 231,
    width: 153,
    marginLeft: 14,
    borderRadius: 23,
  });
  const [Normalitem, setNormalitem] = useState({
    height: 179,
    width: 118,
    marginLeft: 14,
    borderRadius: 23,
    marginTop: 30,
  });
  const [Normal, setNormal] = useState({
    height: 179,
    width: 118,
    marginLeft: 14,
    borderRadius: 23,
    marginTop: 30,
  });
  const [No, setNo] = useState({
    height: 179,
    width: 118,
    marginLeft: 14,
    borderRadius: 23,
    marginTop: 30,
  });

  const [Activeitem, setActiveitem] = useState(0);

  const [Tabitems, setTabitems] = useState([
    {
      key: 0,
      itemstyle: Currentitem,
      imgpath: require('../../assets/Homepi/hme9.png'),
    },
    {
      key: 1,
      itemstyle: Normalitem,
      imgpath: require('../../assets/Homepi/hme10.png'),
    },
    {
      key: 2,
      itemstyle: No,
      imgpath: require('../../assets/Homepi/hme11.png'),
    },
    {
      key: 3,
      itemstyle: Normal,
      imgpath: require('../../assets/Homepi/hme14.png'),
    },
  ]);

  const handlechange = e => {
    if (e != Activeitem) {
      let items = [...Tabitems];

      let item = {...items[e]};
      let item1 = {...items[Activeitem]};

      item.itemstyle = Currentitem;
      item1.itemstyle = Normalitem;

      items[e] = item;
      items[Activeitem] = item1;

      setTabitems(items);
      setActiveitem(e);
      props.currentTab(e);
    }
  };

  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{height: 240}}>
        {Tabitems.map(item => {
          return (
            <>
              <TouchableOpacity
                onPress={() => handlechange(item.key)}
                style={item.itemstyle}>
                <Image
                  style={{height: '100%', width: '100%', borderRadius: 23}}
                  source={item.imgpath}
                />
              </TouchableOpacity>
            </>
          );
        })}

        <View style={{width: 30}}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Hometab;
