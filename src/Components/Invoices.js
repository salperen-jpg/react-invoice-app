import React from 'react';
import './Invoices.css';
import { useGlobalContext } from '../context';
const Invoices = () => {
  const { invoices } = useGlobalContext();
  console.log(invoices);
  return (
    <article className='invoices'>
      {invoices.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.createdAt}</h1>
            <h2>{item.clientName}</h2>
            <h2>a</h2>
          </div>
        );
      })}
    </article>
  );
};

export default Invoices;
