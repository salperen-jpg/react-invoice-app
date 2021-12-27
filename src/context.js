import React, { useContext, useReducer, useState } from 'react';
import data from './data.json';
import { reducer } from './reducer';

const AppContext = React.createContext();

const initialState = {
  invoices: [...data],
  isLoading: false,
  isAlert: { show: false, msg: '', status: '' },
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
