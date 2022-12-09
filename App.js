import React, { useEffect } from 'react';
import Navigation from './src/navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>

      <Navigation />
    </NavigationContainer>
  )

};

export default App;
