import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Images from '../assests/Images';
import AppIntroSlider from 'react-native-app-intro-slider';

const CustomReceiptModal = ({navigation}) => {
  const donees = [
    {
      id: 1,
      name: 'Yogie Ismanda',
      Quantity: '4 Boxes',
      volunteer: 'Ismanda',
      price: '$ 1.99',
    },
    {
      id: 2,
      name: 'Yogie Ismanda',
      Quantity: '4 Boxes',
      volunteer: 'Ismanda',
      price: '$ 1.99',
    },
  ];
  const doneeOne = ({item}) => (
    <View style={styles.item}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={{marginLeft: 24, marginTop: 5}}>{item.Quantity}</Text>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 5,
            width: '30%',
          }}>
          {item.volunteer}
        </Text>

        <Text
          style={{
            marginTop: 5,
            fontWeight: '500',
          }}>
          {item.price}
        </Text>
      </View>
    </View>
  );
  return (
    <AppIntroSlider
      style={{flexGrow: 0.9, bottom: 0}}
      showDoneButton={false}
      showNextButton={false}
      data={donees}
      renderItem={({item}) => {
        return (
          <ImageBackground
            source={Images.bgModalImage}
            style={{flex: 1}}
            resizeMode="contain">
            <View style={styles.bgView}>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 25,
                    color: '#4E4B66',
                    paddingTop: 30,
                    fontWeight: '700',
                  }}>
                  Donation Receipt
                </Text>
                <Image
                  source={Images.paneera}
                  style={{
                    height: 75,
                    width: 75,
                    resizeMode: 'contain',
                    marginTop: 10,
                  }}
                />
              </View>
              <View style={styles.headings}>
                <Text style={[styles.titles, {}]}>Item Name</Text>
                <Text style={[styles.titles, {}]}>Quantity</Text>
                <Text style={styles.titles}>Volunteer By</Text>
                <Text style={[styles.titles, {paddingRight: 12}]}>Price</Text>
              </View>
              {/* flatList */}

              <FlatList data={donees} renderItem={doneeOne} style={{flex: 1}} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                width: '91%',
              }}>
              <Text>Subtotal</Text>
              <Text>$ 15.92</Text>
            </View>
          </ImageBackground>
        );
      }}
      activeDotStyle={{
        width: 10,
        backgroundColor: '#056721',
        color: 'red',
        marginBottom: 90,
      }}
    />
  );
};

export default CustomReceiptModal;

const styles = StyleSheet.create({
  bgView: {
    flex: 0.7,
    paddingLeft: 10,
  },
  titles: {
    color: '#4E4B66',
    fontSize: 16,
    fontWeight: '500',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  headings: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
});
