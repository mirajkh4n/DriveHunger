import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Images from '../assests/Images';
import {Checkbox} from 'react-native-paper';

const Donees = ({navigation}) => {
  const [checked, setChecked] = React.useState(false);

  const donees = [
    {id: 1, name: 'Donee', image: Images.donees1, title: 'Yogie Ismanda'},
    {id: 2, name: 'Donee', image: Images.donees2, title: 'Yogie Ismanda'},
    {id: 3, name: 'Donee', image: Images.donees1, title: 'Yogie Ismanda'},
    {id: 4, name: 'Donee', image: Images.donees2, title: 'Yogie Ismanda'},
    {id: 5, name: 'Donee', image: Images.donees1, title: 'Yogie Ismanda'},
    {id: 6, name: 'Donee', image: Images.donees2, title: 'Yogie Ismanda'},
    {id: 7, name: 'Donee', image: Images.donees1, title: 'Yogie Ismanda'},
    {id: 8, name: 'Donee', image: Images.donees2, title: 'Yogie Ismanda'},
    {id: 9, name: 'Donee', image: Images.donees1, title: 'Yogie Ismanda'},
  ];
  const doneeOne = ({item}) => (
    <View style={styles.item}>
      <View style={styles.avatarContainer}>
        <Image source={item.image} style={styles.avatar} />
      </View>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={{marginLeft: 13, marginTop: 5}}>{item.title}</Text>
      </View>
      <View style={styles.checkBox}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </View>
    </View>
  );
  itemSeparator = () => {
    return <View style={styles.separator}></View>;
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 10,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Entypo name="menu" size={30} style={{marginLeft: 10}} />
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 22,
            color: '#4E4B66',
          }}>
          Donees
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Notifications')}>
          <Ionicons
            name="notifications-outline"
            size={30}
            style={{
              alignSelf: 'flex-end',
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
      </View>

      {/* flatList */}

      <FlatList
        data={donees}
        renderItem={doneeOne}
        ItemSeparatorComponent={itemSeparator}
      />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('')}>
        <Text style={styles.signInBtn}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Donees;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#A7A5B3',
    alignSelf: 'center',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 15,
  },
  avatarContainer: {
    borderRadius: 100,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 60,
    width: 60,
    marginLeft: 10,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 13,
    fontWeight: 'bold',
    marginTop: 3,
  },
  checkBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
    marginRight: 20,
  },
  signInBtn: {
    textAlign: 'center',
    backgroundColor: '#056721',
    borderRadius: 10,
    padding: 20,
    margin: 12,
    color: 'white',
    marginTop: 40,
    marginBottom: 30,
  },
});
