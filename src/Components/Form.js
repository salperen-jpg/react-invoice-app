import React from 'react';
import './Form.css';
import plus from '../assets/icon-plus.svg';
import { useGlobalContext } from '../context';

const Form = () => {
  const { invoices } = useGlobalContext();
  return (
    <article className='filter-form'>
      <div>
        <h1>Invoices</h1>
        <p>There are {invoices.length} total invoices</p>
      </div>
      <div className='form-right'>
        <select name='#' id='#' className='form-select'>
          <option value='pending'>pending</option>
          <option value='draft'>draft</option>
          <option value='paid'>paid</option>
        </select>
        <button className='form-btn'>
          <div className='btn-icon-container'>
            <img src={plus} alt='' />
          </div>
          <span>New</span>
        </button>
      </div>
    </article>
  );
};

export default Form;
