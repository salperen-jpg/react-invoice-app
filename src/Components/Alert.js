import React from 'react';
import { useGlobalContext } from '../context';
import './Alert.css';
const Alert = () => {
  const { isAlert } = useGlobalContext();
  return <div className={`error ${isAlert.status}`}>{isAlert.msg}</div>;
};

export default Alert;
