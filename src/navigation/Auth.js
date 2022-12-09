import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../register/Login';
import Signup from '../register/SignUp';
import ForgotPassword from '../register/ForgetPassword';
import ChangePassword from '../register/Changepassword';
import VerifyEmail from '../register/VerifyEmail';
import Donations from '../screens/Donations';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LogIn">
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: true,
          title: null,
          headerShadowVisible: false, // applied here
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: true,
          title: null,
          headerShadowVisible: false, // applied here
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerShown: true,
          title: null,
          headerShadowVisible: false, // applied here
        }}
      />
      <Stack.Screen
        name="VerifyEmail"
        component={VerifyEmail}
        options={{
          headerShown: true,
          title: null,
          headerShadowVisible: false, // applied here
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerTitleAlign: 'center',
          headerTintColor: '#4E4B66',
          headerShadowVisible: false, // applied here
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Text>Click Me</Text>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name="Donations"
        component={Donations}
        options={{
          headerShown: false,
          title: null,
          headerShadowVisible: false, // applied here
        }}
      />
    </Stack.Navigator>
  );
};

export default Auth;
