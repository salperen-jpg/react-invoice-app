import React from 'react';
import { useGlobalContext } from '../context';
import './Modal.css';
import ModalForm from './ModalForm';

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
        <ModalForm />
      </div>
    </article>
  );
};

export default Modal;
