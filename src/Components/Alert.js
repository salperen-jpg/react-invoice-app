import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';
import './Alert.css';
const Alert = () => {
  const { isAlert, closeAlert } = useGlobalContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  });
  return <div className={`error ${isAlert.status}`}>{isAlert.msg}</div>;
};

export default Alert;
