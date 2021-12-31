import React, { useContext, useReducer } from 'react';
import data from './data.json';
import { reducer } from './reducer';
import {
  CLOSE_MODAL,
  OPEN_MODAL,
  DISCARD_FORM,
  FILTER_BY_STATUS,
} from './actions';

const AppContext = React.createContext();

const initialState = {
  invoices: [...data],
  isLoading: false,
  isAlert: { show: false, msg: '', status: '' },
  isModalOpen: false,
  filtered: [],
};

export const AppProvider = ({ children }) => {
  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };
  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };

  const discardForm = () => {
    dispatch({ type: DISCARD_FORM });
  };
  const filterByStatus = (e) => {
    const value = e.target.value;
    dispatch({ type: FILTER_BY_STATUS, payload: value });
  };

  const firstRender = () => {
    dispatch({ type: 'FIRST_RENDER' });
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        ...state,
        openModal,
        closeModal,
        discardForm,
        filterByStatus,
        firstRender,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
