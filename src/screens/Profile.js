import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Images from '../assests/Images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {myFetchGetRequest} from '../MyFetchApi';
import {AuthContext} from '../context/AuthContext';
import axios from 'axios';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';
const Profile = ({navigation}) => {
  // CONTEXT
  const {state, dispatch} = useContext(AuthContext);
  // USESTATE
  const [businessName, setBusinessName] = useState();
  const [name, setUserName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddess] = useState();
  const [contact, setContact] = useState();
  const [changePassword, setChangePassword] = useState();
  const [profiledata, setProfileData] = useState();

  const [startTime, setStartTime] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [endTime, setEndTime] = useState(new Date());
  const [openEnd, setOpenEnd] = useState(false);

  // PROFILE IMAGE State
  const [imageUri, setImageUri] = useState('');
  const resetState = () => {
    // setEmail('');
    // setUserName('');
    // setBusinessName('');
    // setAddess('');
    // setContact('');
    // setChangePassword('');
  };

  useEffect(() => {
    getUserInfo();
    updateUser();
  }, []);
  // Get Api
  const getUserInfo = async () => {
    const response = await fetch('http://51.83.237.63:4009/api/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        token: state.userAuthentication.token,
      },
    });
    const resJson = await response.json();
    setProfileData(resJson.data.profile);
    setEmail(resJson.data.profile.email);
    setUserName(resJson.data.profile.name);
    setBusinessName(resJson.data.profile.businessName);
    setContact(resJson.data.profile.contactNumber);
    setAddess(resJson.data.profile.address);
    console.log('resjson Profile', resJson.data.profile);
  };

  // PUT API
  const updateUser = async () => {
    var myHeaders = new Headers();
    myHeaders.append('token', state.userAuthentication.token);

    var formdata = new FormData();
    formdata.append(
      'data',
      JSON.stringify({
        name: name,
        businessName: businessName,
        contactNumber: contact,
        address: address,
      }),
    );
    // formdata.append('file', fileInput.files[0], '/path/to/file');

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: formdata,
      // redirect: 'follow',
    };

    fetch('http://51.83.237.63:4009/api/user', requestOptions)
      .then(response => response.json())
      .then(result => console.log('result', result))
      .catch(error => console.log('error', error));
  };

  const openCamera = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      // includeBase64: true,
    };

    launchCamera(options, response => {
      console.log('response =', response);
      if (response.didCancel) {
        console.log('User Cancelled Image Picker');
      } else if (response.error) {
        console.log('Image picker error', response.error);
      } else {
        console.log(response.assets[0].uri);
        setImageUri(response.assets[0].uri);
        // const source = {uri: 'data/image/jpeg;base64,' + response.base64};
        // setImageUri(source);
      }
    });
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}>
            {/* <Entypo name='menu' size={30} style={{ marginLeft: 10 }} /> */}
            <Image source={Images.backButton} style={styles.backbutton} />
          </TouchableOpacity>
          <View style={{alignItems: 'center', flex: 1}}>
            <Text style={styles.profileText}>Profile</Text>
          </View>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Image source={`https://${imageUri.uri}`} style={styles.profile} />
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => openCamera()}
            style={{
              position: 'absolute',
              alignSelf: 'center',
              paddingTop: 20,
            }}>
            <Image
              source={Images.Camera}
              style={{
                height: 28,
                width: 28,
                resizeMode: 'contain',
                tintColor: 'black',
              }}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.businessText}>Business Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Business Name"
            onChangeText={text => setBusinessName(text)}
            value={businessName}
          />
          <Text style={styles.textTitle}>User Name</Text>
          <TextInput
            style={styles.input}
            placeholder="User Name"
            onChangeText={text => setUserName(text)}
            value={name}
          />
          <Text style={styles.textTitle}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <Text style={styles.textTitle}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            onChangeText={text => setAddess(text)}
            value={address}
          />
          <Text style={styles.textTitle}>Business Hours</Text>
          <View style={styles.businessTime}>
            <View style={{flexDirection: 'row'}}>
              {/* From Time */}
              <DatePicker
                testID="timePicker"
                onDateChange={time => setDate(time)}
                modal
                mode="time"
                open={open}
                date={startTime}
                textColor={'#000'}
                onConfirm={startTime => {
                  setOpen(false);
                  setStartTime(startTime);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
              {/* To Time */}
              <DatePicker
                testID="timePicker"
                onDateChange={time => setDate(time)}
                modal
                mode="time"
                open={openEnd}
                date={endTime}
                textColor={'#000'}
                onConfirm={endTime => {
                  setOpenEnd(false);
                  setEndTime(endTime);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setOpen(true)}
                style={{width: '50%'}}>
                <View>
                  <MaterialCommunityIcons
                    name="clock-time-four-outline"
                    size={25}
                    style={{
                      position: 'absolute',
                      right: 25,
                      marginTop: 12,
                      color: '#4E4B66',
                    }}
                  />

                  <Text style={styles.businessTimeInput}>
                    {moment(startTime).format('h:mm: A')}
                  </Text>
                  {/* <TextInput
                 
                  placeholder="From Time"
                /> */}
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setOpenEnd(true)}
                activeOpacity={0.8}
                style={{width: '50%'}}>
                <View>
                  <MaterialCommunityIcons
                    name="clock-time-four-outline"
                    size={25}
                    style={{
                      position: 'absolute',
                      right: 25,
                      marginTop: 12,
                      color: '#4E4B66',
                    }}
                  />
                  <Text style={styles.businessTimeInput}>
                    {moment(endTime).format('h:mm: A')}
                  </Text>
                  {/* <TextInput
                  style={styles.businessTimeInput}
                  placeholder="To Time"
                /> */}
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.textTitle}>Contact Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            onChangeText={text => setContact(text)}
            value={contact}
          />
          <Text style={styles.textTitle}>Change Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="**********"
              secureTextEntry={true}
              autoCorrect={false}
              onChangeText={text => setChangePassword(text)}
              defaultValue={setChangePassword}
            />
            <Entypo
              name="eye"
              size={25}
              style={{
                position: 'absolute',
                right: 40,
                marginTop: 25,
                color: '#4E4B66',
              }}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              updateUser();
              navigation.navigate('Donations');
              resetState();
            }}>
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
    padding: 15,
    borderColor: '#4E4B66',
    borderRadius: 7,
    width: '90%',
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
  profile: {
    height: 100,
    width: 100,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 50,
    borderColor: 'red',
    borderWidth: 1,
    resizeMode: 'cover',
    backgroundColor: 'red',
  },
  businessText: {
    marginTop: 30,
    marginLeft: 32,
    color: '#4E4B66',
    fontSize: 18,
  },
  timePicker: {
    backgroundColor: 'red',
    borderRadius: 5,
    borderColor: '#C5C5C5',
    borderWidth: 1,
    marginVertical: 10,
  },
});
