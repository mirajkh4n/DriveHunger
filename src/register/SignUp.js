import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const Signup = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {}, []);

  const ShowToast = () => {};

  const handleFirstNameChange = text => {
    setFirstName(text);
    if (text.length < 4) {
      setFirstNameError('Minimun 8 characters');
    } else {
      setFirstNameError('');
    }
    console.log('first name', setFirstName);
  };
  const handleEmailChange = text => {
    setEmail(text);
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(text)) {
      setEmailError('Invalid email address.');
    } else {
      setEmailError('');
    }
  };
  const handlePasswordChange = text => {
    setPassword(text);
    if (text.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    } else {
      setPasswordError('');
    }
  };

  // PostApiRequest

  const myFetchSignUpRequest = async () => {
    if (firstName === '' || email === '' || password === '') {
      ToastAndroid.show(
        result.message,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var data = JSON.stringify({
        name: firstName,
        email: email,
        password: password,
        role: 'volunteer',
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };

      fetch('http://51.83.237.63:4009/api/user', requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          if (result.success) {
            navigation.navigate('LogIn');
          } else {
            ToastAndroid.show(
              result.message,
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }
        })
        .catch(error => console.log('error', error));
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.headerText}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            onChangeText={text => handleFirstNameChange(text)}
            value={firstName}
          />

          <Text style={{color: 'red', paddingRight: 60}}>{firstNameError}</Text>

          <TextInput
            style={styles.input}
            placeholder="Email address"
            onChangeText={text => handleEmailChange(text)}
            value={email}
          />
          {emailError ? (
            <Text
              style={{color: 'red', alignSelf: 'flex-start', paddingLeft: 28}}>
              {emailError}
            </Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => handlePasswordChange(text)}
            secureTextEntry={true}
            value={password}
          />
          {passwordError && (
            <Text style={{color: 'red', paddingRight: 70}}>
              {passwordError}
            </Text>
          )}

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
        <TouchableOpacity
          // onPress={() => navigation.navigate('LogIn')}
          onPress={() => myFetchSignUpRequest()}
          activeOpacity={0.8}>
          <Text style={styles.signInBtn}>Sign Up</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#4E4B66',
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 10,
          }}>
          Or
        </Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Image
            source={require('../assests/logo_google.png')}
            style={styles.tinyLogo}
          />
          <Text>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Image
            source={require('../assests/f_logo.png')}
            style={styles.tinyLogo}
          />
          <Text>Sign in with Facebook</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    color: '#056721',
    marginTop: 10,
    fontWeight: 'bold',
    marginBottom: 40,
    backgroundColor: 'none',
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#056721',
    borderRadius: 10,
    width: '90%',
  },
  createAccount: {
    flexDirection: 'row',
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4E4B66',
    padding: 8,
    marginLeft: 100,
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
  button: {
    borderColor: '#4E4B66',
    padding: 15,
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    marginLeft: 20,
  },
  tinyLogo: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
});
