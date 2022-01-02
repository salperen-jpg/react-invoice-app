import React from 'react';
import { useGlobalContext } from '../context';
import Alert from './Alert';

const ModalForm = () => {
  const { discardForm, handleChange, handleSubmit, invoice, isAlert } =
    useGlobalContext();

  const {
    clientEmail,
    clientName,
    createdAt,
    description,
    id,
    city,
    country,
    postCode,
    street,
    paymentDue,
    status,
    total,
  } = invoice;

  return (
    <>
      <div className='form-container'>
        <form action='#' className='invoice-form'>
          <h4 className='form-part'>Bill From</h4>
          <div className='form-elements'>
            <label htmlFor='streetAddress'>Street Address</label>
            <input
              type='text'
              name='street'
              value={street}
              className='form-input'
              onChange={handleChange}
            />
          </div>
          <div className='form-elements'>
            <label htmlFor='country'>country</label>
            <input
              type='text'
              name='country'
              value={country}
              className='form-input'
              onChange={handleChange}
            />
            <label htmlFor='city'>city</label>
            <input
              type='text'
              name='city'
              value={city}
              className='form-input'
              onChange={handleChange}
            />
            <label htmlFor='postCode'>post code</label>
            <input
              type='text'
              name='postCode'
              value={postCode}
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
              value={clientName}
              className='form-input'
              onChange={handleChange}
            />
          </div>
          <div className='form-elements'>
            <label htmlFor='clientEmail'>Client's Email</label>
            <input
              type='text'
              name='clientEmail'
              value={clientEmail}
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
              value={description}
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
              value={createdAt}
              className='form-input'
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-elements'>
            <label htmlFor='paymentDue'>Payment due</label>
            <input
              type='date'
              name='paymentDue'
              value={paymentDue}
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
              value={total}
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
          {isAlert.show && <Alert />}
        </form>
      </div>
    </>
  );
};

export default ModalForm;
