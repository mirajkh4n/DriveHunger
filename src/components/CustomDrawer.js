import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Images from '../assests/Images';
import {AuthContext} from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CustomDrawer(props) {
  // const {logout} = useContext(AuthContext);
  const logOut = () => {
    AsyncStorage.clear();
  };
  const arr = [
    {
      title: 'home',
      icon: Images.home,
      goto: () => props.navigation.navigate('Donations'),
    },
    {
      title: 'profile',
      icon: Images.profile,
      goto: () => props.navigation.navigate('Profile'),
    },
    {
      title: 'donate',
      icon: Images.donate,
      goto: () => props.navigation.navigate('Donees'),
    },
    {
      title: 'Donee history',
      icon: Images.history,
      goto: () => props.navigation.navigate('DoneeHistory'),
    },
    {title: 'subscription', icon: Images.subscription},
    {
      title: 'Tax Deduction',
      icon: Images.TaxDeduction,
      goto: () => props.navigation.navigate('TaxDeduction'),
    },
    {
      title: 'Privacy Policy',
      icon: Images.PrivacyPolicy,
      goto: () => props.navigation.navigate('PrivacyPolicy'),
    },
    {
      title: 'Logout',
      icon: Images.Logout,
      goto: () => {
        logOut();
        // props.navigation.navigate('Walk_Through');
      },
    },
  ];

  return (
    <View
      style={{
        backgroundColor: '#056721',
        flex: 1,
      }}>
      <View style={{flex: 0.2}}>
        <View style={{alignSelf: 'flex-end'}}>
          <AntDesign name="close" size={30} color={'#fff'} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../assests/profileimage.png')}
            style={{height: 80, width: 80, marginTop: 20, marginLeft: 20}}
          />
          <View style={{}}>
            <View>
              <Text
                style={{
                  alignSelf: 'center',
                  marginLeft: 10,
                  fontSize: 25,
                  color: '#fff',
                }}>
                Margarita
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{color: '#fff', fontSize: 8}}>@margarita2013</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            height: 1,
            width: '95%',
            alignSelf: 'center',
            marginTop: 20,
          }}></View>
      </View>

      <View style={{flex: 0.8, marginTop: 20}}>
        {arr.map((ele, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index.toString()}
              onPress={ele.goto}>
              <View
                style={{
                  padding: 10,
                  margin: 12,
                  marginLeft: 10,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <Image
                  source={ele.icon}
                  style={{
                    height: 25,
                    width: 25,
                    resizeMode: 'contain',
                  }}
                />
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 18,
                    }}>
                    {ele.title}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
