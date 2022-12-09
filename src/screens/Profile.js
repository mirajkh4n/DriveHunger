import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

const Profile = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View>
        <View style={styles.profile_image}>
          <Image
            source={require('../assests/profileimage.png')}
            style={{ height: 100, width: 100, marginTop: 20 }}
          />
        </View>
        <View>
          <Text
            style={{
              marginTop: 30,
              marginLeft: 32,
              color: '#4E4B66',
              fontSize: 18,
            }}>
            Business Name
          </Text>
          <TextInput style={styles.input} placeholder="Business Name" />
          <Text style={styles.textTitle}>User Name</Text>
          <TextInput style={styles.input} placeholder="User Name" />
          <Text style={styles.textTitle}>Email</Text>
          <TextInput style={styles.input} placeholder="Email" />
          <Text style={styles.textTitle}>Address</Text>
          <TextInput style={styles.input} placeholder="Address" />
          <Text style={styles.textTitle}>Business Hours</Text>
          <View style={styles.businessTime}>
            <TextInput
              style={styles.businessTimeInput}
              placeholder="From Time"
            />
            <TextInput style={styles.businessTimeInput} placeholder="To Time" />
          </View>
          <Text style={styles.textTitle}>Contact Number</Text>
          <TextInput style={styles.input} placeholder="Contact Number" />
          <Text style={styles.textTitle}>Change Password</Text>
          <TextInput style={styles.input} placeholder="Change Password" />
          <TouchableOpacity onPress={() => navigation.navigate('Donations')}>
            <Text style={styles.Save}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile_image: {
    alignItems: 'center',
    alignContent: 'center',
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#4E4B66',
    borderRadius: 7,
    width: '85%',
    alignSelf: 'center',
  },
  textTitle: {
    marginLeft: 32,
    color: '#4E4B66',
    fontSize: 18,
  },
  businessTime: {
    flexDirection: 'row',
    margin: 12,
    padding: 10,
  },
  businessTimeInput: {
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: '#4E4B66',
    borderRadius: 7,
    width: '45%',
  },
  Save: {
    textAlign: 'center',
    backgroundColor: '#056721',
    borderRadius: 10,
    padding: 20,
    margin: 30,
    color: 'white',
    marginTop: 20,
    width: '85%',
    fontSize: 18,
  },
});
