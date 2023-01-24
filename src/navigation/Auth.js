import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LogIn from '../register/Login';
import Signup from '../register/SignUp';
import ForgotPassword from '../register/ForgetPassword';
import ChangePassword from '../register/Changepassword';
import VerifyEmail from '../register/VerifyEmail';
import Walk_Through from '../register/walk_Through';
import Get_Start from '../register/Get_Start';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Walk_Through">
      <Stack.Screen name="Walk_Through" component={Walk_Through} />
      <Stack.Screen name="Get_Start" component={Get_Start} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
    </Stack.Navigator>
  );
};

export default Auth;
