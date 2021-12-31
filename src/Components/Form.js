import React from 'react';
import './Form.css';
import plus from '../assets/icon-plus.svg';
import { useGlobalContext } from '../context';

const Form = () => {
  const { openModal, invoices, filterByStatus } = useGlobalContext();

  return (
    <article className='filter-form'>
      <div>
        <h1>Invoices</h1>
        <p>There are {invoices.length} total invoices</p>
      </div>
      <div className='form-right'>
        <select
          name='#'
          id='#'
          className='form-select'
          onChange={filterByStatus}
        >
          <option value='DEFAULT' name='' disabled hidden>
            Filter by status
          </option>
          <option name='all' value='all'>
            all
          </option>
          <option name='pending' value='pending'>
            pending
          </option>
          <option name='draft' value='draft'>
            draft
          </option>
          <option name='paid' value='paid'>
            paid
          </option>
        </select>
        <button className='form-btn' onClick={openModal}>
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
