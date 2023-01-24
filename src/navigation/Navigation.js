import {StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Auth from './Auth';
import Main from './Main';
import {AuthProvider} from '../context/AuthContext';

const Stack = createStackNavigator();

const Navigation = () => (
  <AuthProvider>
    <Stack.Navigator initialRouteName="AuthStack">
      <Stack.Screen
        name="AuthStack"
        component={Auth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainStack"
        component={Main}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </AuthProvider>
);

export default Navigation;

// const styles = StyleSheet.create({});
