import React, {useContext, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import Navigation from './src/navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {AuthContext, AuthProvider} from './src/context/AuthContext';
import {StatusBar} from 'react-native';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor="#056721" />
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
