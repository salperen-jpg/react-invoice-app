import React, { useContext, useReducer } from 'react';
import { reducer } from './reducer';

const AppContext = React.createContext();

const initialState = {};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value='setup'>{children}</AppContext.Provider>;
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
