import React, { useContext, useReducer, useState } from 'react';
import data from './data.json';
import { reducer } from './reducer';
import { CLOSE_MODAL, OPEN_MODAL } from './actions';

const AppContext = React.createContext();

const initialState = {
  invoices: [...data],
  isLoading: false,
  isAlert: { show: false, msg: '', status: '' },
  isModalOpen: false,
};

export const AppProvider = ({ children }) => {
  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };
  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, openModal, closeModal }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
