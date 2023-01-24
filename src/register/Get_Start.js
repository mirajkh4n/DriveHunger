import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Images from '../assests/Images';

const Get_Start = ({navigation}) => {
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
          <Text style={styles.profileText}></Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: '90%',
          paddingTop: 25,
          marginLeft: 20,
        }}>
        <Text
          style={{
            fontSize: 38,
            padding: 10,
            color: '#056721',
            fontWeight: '600',
          }}>
          Get Started
        </Text>
        <Text style={{marginLeft: 15, height: '16%'}}>
          Please choose which cartegory you will like to create an account for.
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          activeOpacity={0.8}>
          <Text style={styles.signInBtn}>An Organization</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          activeOpacity={0.8}>
          <Text style={styles.signInBtn}>Delivery Volunteer</Text>
        </TouchableOpacity>
        <View style={styles.createAccount}>
          <Text style={{fontSize: 16}}>Already have an account?</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('LogIn')}>
            <Text
              style={{
                marginLeft: 10,
                fontWeight: 'bold',
                color: '#A5907E',
                fontSize: 20,
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Get_Start;

const styles = StyleSheet.create({
  backbutton: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    flex: 1,
    marginLeft: 10,
  },
  profileText: {
    fontSize: 22,
    marginTop: 15,
    color: '#4E4B66',
    marginRight: 20,
  },
  signInBtn: {
    textAlign: 'center',
    backgroundColor: '#056721',
    borderRadius: 10,
    padding: 20,
    color: 'white',
    marginTop: 30,
    width: '90%',
    marginLeft: 20,
    fontSize: 18,
  },
  createAccount: {
    flexDirection: 'row',
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4E4B66',
    padding: 8,
    marginLeft: 10,
  },
});
