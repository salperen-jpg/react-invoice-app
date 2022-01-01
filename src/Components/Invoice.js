import React from 'react';
import './Invoice.css';
import right from '../assets/icon-arrow-right.svg';
import DateTime from './DateTime';

const Invoice = ({
  id,
  clientName,
  createdAt,
  desciption,
  paymentDue,
  paymentTerms,
  senderAddress,
  status,
  total,
}) => {
  return (
    <article className='invoice'>
      <div className='invoice-left'>
        <h4 className='tag'>
          <span>#</span>
          {id}
        </h4>
        <div className='date'>
          <DateTime datetime={paymentDue} />
        </div>
        <h2 className='price'>${total}</h2>
      </div>
      <div className='invoice-right'>
        <p className='name'>{clientName}</p>
        <div
          className={`${
            status === 'paid'
              ? 'status paid'
              : `${status === 'pending' ? 'status pending' : 'status'}`
          }`}
        >
          <span className='circle'></span>
          <span>{status}</span>
        </div>
      </div>
      <div className='arrow-right'>
        <img src={right} alt='' />
      </div>
    </article>
  );
};

export default Invoice;
