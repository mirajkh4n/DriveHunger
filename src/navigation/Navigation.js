import {StyleSheet} from 'react-native';
import React, {useEffect, useReducer, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Auth from './Auth';
import Main from './Main';
import {AuthContext} from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer, {initialData} from '../context/Reducer';

const Stack = createStackNavigator();

const Navigation = () => {
  const [user, setUser] = useState('');
  const [state, dispatch] = useReducer(reducer, initialData);

  useEffect(() => {
    checktoken();
  }, []);

  const checktoken = async () => {
    const getToken = await AsyncStorage.getItem('user');
    if (getToken != null) {
      setUser(JSON.parse(getToken));
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{state, dispatch, updateUser: checktoken()}}>
      <Stack.Navigator>
        {user?.token ? (
          <Stack.Screen
            name="MainStack"
            component={Main}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="AuthStack"
            component={Auth}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
};
export default Navigation;

// const styles = StyleSheet.create({});
