import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import Images from '../assests/Images';

const slides = [
  {
    id: 1,
    title: 'Who We Are',
    description:
      'DrivingHungerAway offers a free, fast, and easy way for restaurants to donate food to organizations."',
    image: Images.onboarding1,
  },
  {
    id: 2,
    title: 'Earn Volunteer Hours',
    description:
      'Earn volunteer hours by delivering left over food to nearby food pantries."',
    image: Images.onboarding2,
  },
  {
    id: 3,
    title: 'Request Food',
    image: Images.onboarding3,
    description:
      'Have any need for left over food from restaurants? You can sign up and start sending in your requests.',
  },
];
export default function Walk_Through({navigation}) {
  {
    return (
      <View style={{flex: 1, width: '100%'}}>
        <AppIntroSlider
          showDoneButton={false}
          showNextButton={false}
          data={slides}
          renderItem={({item}) => {
            return (
              <View style={{flex: 1}}>
                <View
                  style={{
                    flex: 1,
                    width: '100%',
                  }}>
                  <Image source={item.image} style={styles.images} />
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </View>
            );
          }}
          activeDotStyle={{
            width: 23,
            height: 7,
            backgroundColor: '#056721',
          }}
          dotStyle={{
            height: 7,
            width: 23,
            backgroundColor: 'gray',
          }}
        />
        <View style={{flex: 0.2}}>
          <View style={styles.BtnView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Get_Start')}
              activeOpacity={0.8}
              style={styles.getStarted}>
              <Text style={{color: '#fff', marginTop: 13}}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('LogIn')}
              activeOpacity={0.8}
              style={styles.signIn}>
              <Text
                style={{
                  color: '#056721',
                  marginTop: 12,
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  signIn: {
    backgroundColor: '#fff',
    width: '38%',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#056721',
    borderWidth: 1,
  },
  getStarted: {
    backgroundColor: '#056721',
    width: '38%',
    alignItems: 'center',
    borderRadius: 10,
  },
  titleText: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 20,
    color: '#056721',
    fontSize: 18,
  },
  images: {
    height: 400,
    width: '100%',
    resizeMode: 'stretch',
  },
  description: {
    paddingTop: 5,
    marginLeft: 30,
    width: '80%',
  },
  BtnView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 45,
  },
});
