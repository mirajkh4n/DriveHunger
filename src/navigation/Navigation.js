import { StyleSheet } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './Auth';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const Navigation = () => (


  <Stack.Navigator initialRouteName='AuthStack' >
    <Stack.Screen
      name="AuthStack"
      component={Auth}
      options={{ headerShown: false }}
    />

  </Stack.Navigator>




);

export default Navigation;

const styles = StyleSheet.create({});
