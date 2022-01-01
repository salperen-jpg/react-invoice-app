import React, { useContext, useReducer } from 'react';
import data from './data.json';
import { reducer } from './reducer';
import {
  CLOSE_MODAL,
  OPEN_MODAL,
  DISCARD_FORM,
  FILTER_BY_STATUS,
  HANDLE_CHANGE,
  HANDLE_SUBMIT,
} from './actions';

const AppContext = React.createContext();

const initialState = {
  invoice: {
    clientEmail: '',
    clientName: '',
    createdAt: '',
    description: '',
    id: '',
    paymentDue: '',
    senderAddress: {
      city: '',
      country: '',
      postCode: '',
      street: '',
    },
    status: '',
    total: '',
  },
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
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      clientEmail,
      clientName,
      createdAt,
      description,
      id,
      paymentDue,
      senderAddress,
      status,
      total,
    } = state.invoice;
    if (
      clientEmail &&
      clientName &&
      createdAt &&
      description &&
      paymentDue &&
      senderAddress &&
      total
    ) {
      dispatch({
        type: HANDLE_SUBMIT,
        payload: state.invoice,
      });
    }
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
        handleChange,
        handleSubmit,
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
