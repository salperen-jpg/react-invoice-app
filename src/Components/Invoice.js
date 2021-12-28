import React from 'react';
import './Invoice.css';
import right from '../assets/icon-arrow-right.svg';

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
          <span>#</span>RT3080
        </h4>
        <p className='date'>{paymentDue}</p>
        <h2 className='price'>${total.toFixed(0)}</h2>
      </div>
      <div className='invoice-right'>
        <p className='name'>{clientName}</p>
        <div className='status'>
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
