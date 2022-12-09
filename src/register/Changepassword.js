import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.headerText}>Change Password</Text>
        <View style={styles.createAccount}>
          <Text style={{fontSize: 20}}>
            Success! You can now create a new
            {'\n'}password.
          </Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="qwurjw"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Repeat password"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('VerifyEmail')}>
        <Text style={styles.signInBtn}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    alignContent: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 40,
    color: '#056721',
    marginTop: 10,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: 'none',
  },
  signInBtn: {
    textAlign: 'center',
    backgroundColor: '#056721',
    borderRadius: 10,
    padding: 20,
    color: 'white',
    marginTop: 30,
    width: '80%',
    marginLeft: 40,
    fontSize: 18,
  },
  createAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4E4B66',
    padding: 8,
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 15,
    borderColor: '#056721',
    borderRadius: 10,
    width: '80%',
    marginTop: 20,
  },
});
