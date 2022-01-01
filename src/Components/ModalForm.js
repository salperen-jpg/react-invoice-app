import React from 'react';
import { useGlobalContext } from '../context';

const ModalForm = () => {
  const { discardForm, handleChange, handleSubmit } = useGlobalContext();
  return (
    <>
      <div className='form-container'>
        <form action='#' className='invoice-form'>
          <h4 className='form-part'>Bill From</h4>
          <div className='form-elements'>
            <label htmlFor='streetAddress'>Street Address</label>
            <input
              type='text'
              name='streetAddress'
              className='form-input'
              onChange={handleChange}
            />
          </div>
          <div className='form-elements'>
            <label htmlFor='country'>country</label>
            <input
              type='text'
              name='country'
              className='form-input'
              onChange={handleChange}
            />
            <label htmlFor='city'>city</label>
            <input
              type='text'
              name='city'
              className='form-input'
              onChange={handleChange}
            />
            <label htmlFor='postCode'>post code</label>
            <input
              type='text'
              name='postCode'
              className='form-input'
              onChange={handleChange}
            />
          </div>
          <h4 className='form-part'>Bill To</h4>
          <div className='form-elements'>
            <label htmlFor='clientName'>Client's Name</label>
            <input
              type='text'
              name='clientName'
              className='form-input'
              onChange={handleChange}
            />
          </div>
          <div className='form-elements'>
            <label htmlFor='clientEmail'>Client's Email</label>
            <input
              type='text'
              name='clientEmail'
              className='form-input'
              onChange={handleChange}
            />
          </div>
          <h4 className='form-part'>About Bill</h4>
          <div className='form-elements'>
            <label htmlFor='description'>description</label>
            <input
              type='text'
              name='description'
              className='form-input'
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-elements'>
            <label htmlFor='createdAt'>Invoice Date</label>
            <input
              type='date'
              name='createdAt'
              className='form-input'
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-elements'>
            <label htmlFor='paymentDue'>Payment due</label>
            <input
              type='text'
              name='paymentDue'
              className='form-input'
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-elements'>
            <label htmlFor='total'>Total</label>
            <input
              type='number'
              name='total'
              className='form-input'
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-btn-container'>
            <button
              type='button'
              className='btn discard-btn'
              onClick={discardForm}
            >
              discard
            </button>
            <button
              type='submit'
              className='btn save-btn'
              onClick={handleSubmit}
            >
              save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalForm;
