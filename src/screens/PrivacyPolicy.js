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

const PrivacyPolicy = ({navigation}) => {
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
          <Text style={styles.profileText}>Privacy Policy</Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          flex: 1,
          width: '90%',
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 18, padding: 10}}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>
      </View>
    </View>
  );
};

export default PrivacyPolicy;

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
});
