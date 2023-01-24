import React, {useContext, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import Navigation from './src/navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {AuthContext, AuthProvider} from './src/context/AuthContext';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
