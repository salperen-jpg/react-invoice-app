import React from 'react';
import { useGlobalContext } from '../context';
import './Modal.css';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <article className={`${isModalOpen ? 'modal show' : 'modal'}`}>
      <div className='modal-container'>
        <div className='btn-container'>
          <button className='close-btn' onClick={closeModal}>
            <span>
              <i className='fas fa-times'></i>
            </span>
          </button>
        </div>
        <h1>New Invoice</h1>
        <div className='form-container'>
          <form action='#' className='invoice-form'>
            <h4 className='form-part'>Bill From</h4>
            <div className='form-elements'>
              <label htmlFor='streetAddress'>Street Address</label>
              <input type='text' name='streetAddress' className='form-input' />
            </div>
            <div className='form-elements'>
              <label htmlFor='country'>country</label>
              <input type='text' name='country' className='form-input' />
              <label htmlFor='city'>city</label>
              <input type='text' name='city' className='form-input' />
              <label htmlFor='postCode'>post code</label>
              <input type='text' name='postCode' className='form-input' />
            </div>
            <h4 className='form-part'>Bill To</h4>
            <div className='form-elements'>
              <label htmlFor='clientName'>Client's Name</label>
              <input type='text' name='clientName' className='form-input' />
            </div>
            <div className='form-elements'>
              <label htmlFor='clientEmail'>Client's Email</label>
              <input type='text' name='clientEmail' className='form-input' />
            </div>
            <div className='form-elements'>
              <label htmlFor='clientName'>Client's Name</label>
              <input type='text' name='clientName' className='form-input' />
            </div>
            <h4 className='form-part'>About Bill</h4>
            <div className='form-elements'>
              <label htmlFor='description'>description</label>
              <input type='text' name='description' className='form-input' />
            </div>
            <div className='form-elements'>
              <label htmlFor='createdAt'>Invoice Date</label>
              <input type='date' name='createdDate' className='form-input' />
            </div>
            <div className='form-elements'>
              <label htmlFor='paymentDue'>Payment due</label>
              <input type='text' name='paymentDue' className='form-input' />
            </div>
            <div className='form-elements'>
              <label htmlFor='total'>Total</label>
              <input type='number' name='total' className='form-input' />
            </div>
            <div className='form-btn-container'>
              <button type='button' className='btn discard-btn'>
                discard
              </button>
              <button type='submit' className='btn save-btn'>
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Modal;
