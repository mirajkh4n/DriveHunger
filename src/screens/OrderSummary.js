import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Images from '../assests/Images';

const OrderSummary = ({navigation, route}) => {
  const {data} = route.params;

  // const donees = [
  //   {
  //     id: 1,
  //     title: 'Ponero Bread',
  //     image: Images.summaryDetailsImg,
  //     quantity: '4 box',
  //     weight: '2 kg',
  //     date: 'May 22 2022',
  //     donated: 'Donated to ABC Organization',
  //     price: 'Price $1.99',
  //   },
  //   {
  //     id: 2,
  //     title: 'Ponero Bread',
  //     image: Images.summaryDetailsImg,
  //     quantity: '4 box',
  //     weight: '2 kg',
  //     date: 'May 22 2022',
  //     donated: 'Donated to ABC Organization',
  //     price: 'Price $1.99',
  //   },
  //   {
  //     id: 3,
  //     title: 'Ponero Bread',
  //     image: Images.summaryDetailsImg,
  //     quantity: '4 box',
  //     weight: '2 kg',
  //     date: 'May 22 2022',
  //     donated: 'Donated to ABC Organization',
  //     price: 'Price $1.99',
  //   },
  //   {
  //     id: 4,
  //     title: 'Ponero Bread',
  //     image: Images.summaryDetailsImg,
  //     quantity: '4 box',
  //     weight: '2 kg',
  //     date: 'May 22 2022',
  //     donated: 'Donated to ABC Organization',
  //     price: 'Price $1.99',
  //   },
  // ];
  const doneeOne = ({item}) => (
    <View style={{marginTop: 20}}>
      <View style={styles.item}>
        <View style={styles.avatarContainer}>
          <Image source={Images.summaryDetailsImg} style={styles.avatar} />
        </View>
        <View style={{flexDirection: 'column', marginLeft: 20}}>
          <Text style={styles.name}>{item.itemName}</Text>
          <Text style={styles.detailsText}>{item.quantity} boxes</Text>
          <Text style={styles.detailsText}>{item.date}</Text>
          <Text style={styles.detailsText}>$ {item.price}</Text>
          <Text style={styles.detailsText}>{item.estimateWeight} KG</Text>
          <Text style={styles.detailsText}>{item.donated}</Text>
        </View>
        <View style={styles.checkBox}>
          <Image source={Images.Close_Icon} style={{height: 20, width: 20}} />
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
          }}>
          Order Summary
        </Text>
        <TouchableOpacity activeOpacity={0.8}>
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

      {/* FlatList */}

      <FlatList data={data} renderItem={doneeOne} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
          marginRight: 25,
          marginTop: 10,
        }}>
        <Text style={{marginLeft: 15, color: '#056721', fontSize: 18}}>
          Total Order Items
        </Text>
        <Text style={{fontWeight: 'bold', color: '#056721', fontSize: 18}}>
          {data.length}
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('DonationItems');
          console.log('waheed data', data);
        }}>
        <Text style={styles.signInBtn}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    paddingVertical: 10,
    flexDirection: 'row',
    marginLeft: 20,
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
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#056721',
  },
  detailsText: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 10,
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
