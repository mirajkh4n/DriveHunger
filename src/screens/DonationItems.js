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
import Images from '../assests/Images';
import {shadow} from 'react-native-paper';

const DonationItems = ({navigation}) => {
  const donees = [
    {
      id: 1,
      title: 'Ponero Bread',
      image: Images.summaryDetailsImg,
      quantity: '4 box',
      weight: '2 kg',
      date: 'May 22 2022',
      donated: 'Donated to ABC Organization',
      price: 'Price $1.99',
      status: 'Status Delivered',
    },
    {
      id: 2,
      title: 'Ponero Bread',
      image: Images.summaryDetailsImg,
      quantity: '4 box',
      weight: '2 kg',
      date: 'May 22 2022',
      donated: 'Donated to ABC Organization',
      price: 'Price $1.99',
      status: 'Status Delivered',
    },
    {
      id: 3,
      title: 'Ponero Bread',
      image: Images.summaryDetailsImg,
      quantity: '4 box',
      weight: '2 kg',
      date: 'May 22 2022',
      donated: 'Donated to ABC Organization',
      price: 'Price $1.99',
      status: 'Status Delivered',
    },
    {
      id: 4,
      title: 'Ponero Bread',
      image: Images.summaryDetailsImg,
      quantity: '4 box',
      weight: '2 kg',
      date: 'May 22 2022',
      donated: 'Donated to ABC Organization',
      price: 'Price $1.99',
      status: 'Status Delivered',
    },
    {
      id: 5,
      title: 'Ponero Bread',
      quantity: '4 box',
      weight: '2 kg',
      date: 'May 22 2022',
      donated: 'Donated to ABC Organization',
      price: 'Price $1.99',
      status: 'Status Delivered',
    },
    {
      id: 6,
      title: 'Ponero Bread',
      quantity: '4 box',
      weight: '2 kg',
      date: 'May 22 2022',
      donated: 'Donated to ABC Organization',
      price: 'Price $1.99',
      status: 'Status Delivered',
    },
    {
      id: 7,
      title: 'Ponero Bread',
      quantity: '4 box',
      weight: '2 kg',
      date: 'May 22 2022',
      donated: 'Donated to ABC Organization',
      price: 'Price $1.99',
      status: 'Status Delivered',
    },
  ];
  const doneeOne = ({item}) => (
    <View
      style={{
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: item.id % 2 == 0 ? '#fff' : '#F3F3F3',
      }}>
      <View style={styles.items}>
        {/* <View style={styles.avatarContainer}>
                    <Image source={item.image} style={styles.avatar} />
                </View> */}
        <View style={{flexDirection: 'column', marginLeft: 10}}>
          <Text style={styles.name}>{item.title}</Text>
          <Text style={styles.detailsText}>{item.quantity}</Text>
          <Text style={styles.detailsText}>{item.weight}</Text>
          <Text style={styles.detailsText}>{item.price}</Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.detailsText}>{item.donated}</Text>
          </View>
        </View>
        <View style={styles.checkBox}>
          <Text style={{}}>{item.date}</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('TrackingVolunteer')}>
            <Text
              style={{
                flexDirection: 'row',
                fontSize: 16,
                color: '#056721',
              }}>
              {item.status}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 15,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          // onPress={() => {
          //     // navigation.toggleDrawer()
          // }}
          onPress={() => navigation.goBack('Donations')}>
          <Image source={Images.backButton} style={styles.backBtn} />
        </TouchableOpacity>
        <Text style={styles.titletxt}>Donations</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Image source={Images.profileVector} style={styles.profileicon} />
        </TouchableOpacity>
      </View>
      {/* FlatList */}
      <FlatList data={donees} renderItem={doneeOne} />
    </View>
  );
};

export default DonationItems;

const styles = StyleSheet.create({
  titletxt: {
    alignSelf: 'center',
    fontSize: 22,
    color: '#4E4B66',
  },
  backBtn: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  profileicon: {
    height: 25,
    width: 25,
    alignSelf: 'flex-end',
    marginRight: 10,
    resizeMode: 'contain',
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  avatarContainer: {
    borderRadius: 10,
    height: 70,
    width: 70,
    alignItems: 'center',
  },
  avatar: {
    height: 120,
    width: 100,
    marginLeft: 20,
    resizeMode: 'cover',
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#056721',
  },
  detailsText: {
    fontWeight: '600',
    fontSize: 16,
  },
  checkBox: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 20,
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
