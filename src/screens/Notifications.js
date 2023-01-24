import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import Images from '../assests/Images';
import {ScrollView} from 'react-native-gesture-handler';

const Notifications = ({navigation}) => {
  const donees = [
    {
      id: 1,
      name: 'Donee',
      image: Images.donees1,
      title: 'From Yogie Ismanda Amet minim ',
      time: '09:20AM',
    },
    {
      id: 2,
      name: 'Donee',
      image: Images.donees2,
      title: 'From Yogie Ismanda Amet minim ',
      time: '09:20AM',
    },
    {
      id: 3,
      name: 'Donee',
      image: Images.donees1,
      title: 'From Yogie Ismanda Amet minim',
      time: '09:20AM',
    },
    {
      id: 4,
      name: 'Donee',
      image: Images.donees2,
      title: 'From Yogie Ismanda Amet minim',
      time: '09:20AM',
    },
    {
      id: 5,
      name: 'Donee',
      image: Images.donees1,
      title: 'From Yogie Ismanda Amet minim',
      time: '09:20AM',
    },
    {
      id: 6,
      name: 'Donee',
      image: Images.donees2,
      title: 'From Yogie Ismanda Amet minim',
      time: '09:20AM',
    },
    {
      id: 7,
      name: 'Donee',
      image: Images.donees1,
      title: 'From Yogie Ismanda Amet minim',
      time: '09:20AM',
    },
    {
      id: 8,
      name: 'Donee',
      image: Images.donees2,
      title: 'From Yogie Ismanda Amet minim',
      time: '09:20AM',
    },
    {
      id: 9,
      name: 'Donee',
      image: Images.donees1,
      title: 'From Yogie Ismanda Amet minim',
      time: '09:20AM',
    },
  ];
  const doneeOne = ({item}) => (
    <View style={styles.item}>
      <View style={styles.avatarContainer}>
        <Image source={item.image} style={styles.avatar} />
      </View>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={{marginLeft: 13}}>{item.title}</Text>
        <Text style={{marginLeft: 13}}>deserunt minim ullamco est sit.</Text>
      </View>
      <View style={styles.checkBox}>
        {/* <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);

                    }}
                /> */}
        <Text>{item.time}</Text>
      </View>
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}>
          {/* <Entypo name='menu' size={30} style={{ marginLeft: 10 }} /> */}
          <Image source={Images.backButton} style={styles.backbutton} />
        </TouchableOpacity>
        <View style={{alignItems: 'center', flex: 1}}>
          <Text style={styles.profileText}>Notifications</Text>
        </View>
      </View>
      {/* flatList */}
      <View
        style={{
          width: '95%',
          alignSelf: 'center',
          marginBottom: 20,
          alignContent: 'center',
        }}>
        <FlatList
          data={donees}
          renderItem={doneeOne}
          ListHeaderComponent={() => (
            <Text style={styles.todayText}>Today</Text>
          )}
          ListFooterComponent={() => (
            <Text style={styles.todayText}>jhdsfhsdf</Text>
          )}
        />
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  profileText: {
    fontSize: 22,
    marginTop: 15,
    color: '#4E4B66',
    marginRight: 20,
  },
  backbutton: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    flex: 1,
    marginLeft: 10,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
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
    marginBottom: 20,
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
  todayText: {
    marginLeft: 15,
    marginTop: 15,
    fontSize: 16,
  },
});
