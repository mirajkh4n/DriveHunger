import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

const Signup = ({navigation}) => {
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
          <TextInput style={styles.input} placeholder="Full name" />
          <TextInput style={styles.input} placeholder="Email address" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />

          <View style={styles.createAccount}>
            <Text style={{fontSize: 16}}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
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
        <TouchableOpacity>
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
