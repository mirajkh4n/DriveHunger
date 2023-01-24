import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Images from '../assests/Images';

const Donee_History = ({navigation}) => {
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
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => navigation.navigate('Donation_History_Details')}>
          <Text style={{fontSize: 15, color: '#056721'}}>Details </Text>
          <Image
            source={Images.Details_Icon}
            style={{
              height: 10,
              width: 10,
              resizeMode: 'contain',
              marginTop: 5,
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
  itemSeparator = () => {
    return <View style={styles.separator}></View>;
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}>
          {/* <Entypo name='menu' size={30} style={{ marginLeft: 10 }} /> */}
          <Image source={Images.backButton} style={styles.backbutton} />
        </TouchableOpacity>
        <View style={{alignItems: 'center', flex: 1}}>
          <Text style={styles.profileText}>Donee History </Text>
        </View>
      </View>
      {/* flatList */}

      <FlatList
        data={donees}
        renderItem={doneeOne}
        ItemSeparatorComponent={itemSeparator}
      />

      {/* <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('')}>
        <Text style={styles.signInBtn}>Submit</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Donee_History;

const styles = StyleSheet.create({
  backbutton: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    flex: 1,
    marginLeft: 10,
    marginTop: 15,
  },
  profileText: {
    fontSize: 22,
    marginTop: 15,
    color: '#4E4B66',
    marginRight: 20,
  },
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#A7A5B3',
    alignSelf: 'center',
    backgroundColor: '#056721',
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
});
