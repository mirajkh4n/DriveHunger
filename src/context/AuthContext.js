import React, {createContext, useState, useReducer} from 'react';
import reducer, {initialData} from './Reducer';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};
