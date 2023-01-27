import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {AuthContext} from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Signup from './SignUp';

const LogIn = ({navigation}) => {
  // Context
  const {state, dispatch} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {}, []);

  const ShowToast = () => {
    ToastAndroid.show(
      'Fill all filed correctly',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  const ShowToastForInvaildmail = () => {
    ToastAndroid.show(
      'Invailed email or Password',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
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

  const resetState = () => {
    setEmail('');
    setPassword('');
  };

  // PutApiRequest

  const myFetchSignUpRequest = async () => {
    if (!email || !password) {
      ShowToast();
    } else {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var data = JSON.stringify({
        email: email,
        password: password,
      });

      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: data,
        redirect: 'follow',
      };

      fetch('http://51.83.237.63:4009/api/auth/user', requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.success) {
            console.log('Login', result);
            dispatch({type: 'LOGIN_USER', payload: result.data});
            navigation.navigate('MainStack');
            resetState();
          } else if (!result.success) {
            ShowToastForInvaildmail();
          }
        })
        .catch(error => console.log('error', error));
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image source={require('../assests/logo.png')} style={styles.image} />
          <Text style={styles.text}>Login</Text>
          <Text></Text>
        </View>
        <View style={{width: '90%'}}>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            onChangeText={text => handleEmailChange(text)}
            value={email}
          />
          {emailError ? (
            <Text
              style={{color: 'red', alignSelf: 'flex-start', paddingLeft: 18}}>
              {emailError}
            </Text>
          ) : null}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="*******"
              secureTextEntry={true}
              // secureTextEntry={data.isSecureTextEntry ? true : false}
              onChangeText={text => handlePasswordChange(text)}
              value={password}
            />
            {passwordError && (
              <Text style={{color: 'red', paddingLeft: 18}}>
                {passwordError}
              </Text>
            )}
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          <View style={styles.createAccount}>
            <Text style={{fontSize: 18}}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: 'bold',
                  color: '#A5907E',
                  fontSize: 20,
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
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
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              myFetchSignUpRequest();
            }}
            // onPress={() => {
            //   onLoginPress();
            //   navigation.navigate('MainStack');
            // }}
          >
            <Text style={styles.signInBtn}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 50,
  },
  logo: {
    height: 60,
    width: 90,
    marginTop: 40,
  },
  input: {
    flex: 1,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#056721',
    borderRadius: 10,
  },
  image: {
    height: 60,
    width: 90,
    paddingTop: 50,
  },
  text: {
    color: '#4E4B66',
    paddingTop: 20,
    paddingLeft: 25,
    fontSize: 18,
  },
  createAccount: {
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4E4B66',
    padding: 8,
  },
  button: {
    alignItems: 'center',
    borderColor: '#4E4B66',
    padding: 15,
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signInBtn: {
    textAlign: 'center',
    backgroundColor: '#056721',
    borderRadius: 10,
    padding: 20,
    margin: 12,
    color: 'white',
    marginTop: 60,
  },
  tinyLogo: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  forgotText: {
    paddingLeft: 20,
    color: '#A5907E',
    fontWeight: 'bold',
    fontSize: 16,
  },
  passwordContainer: {},
});
