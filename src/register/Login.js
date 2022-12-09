import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';

const LogIn = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image source={require('../assests/logo.png')} style={styles.image} />
          <Text style={styles.text}>Login</Text>
        </View>
        <View style={{ width: '90%' }}>
          <TextInput style={styles.input} placeholder="mirajkh4n@gmail.com" />
          <TextInput
            style={styles.input}
            placeholder="*******"
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          <View style={styles.createAccount}>
            <Text style={{ fontSize: 18 }}>Don't have an account?</Text>
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
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../assests/logo_google.png')}
              style={styles.tinyLogo}
            />
            <Text>Sign in with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../assests/f_logo.png')}
              style={styles.tinyLogo}
            />
            <Text>Sign in with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
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
});
