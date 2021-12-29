import React from 'react';
import './Invoices.css';
import { useGlobalContext } from '../context';
import Invoice from './Invoice';
const Invoices = () => {
  const { invoices } = useGlobalContext();
  console.log(invoices[0]);
  return (
    <article className='invoices'>
      {invoices.map((invoice) => {
        return <Invoice key={invoice.id} {...invoice} />;
      })}
    </article>
  );
};

export default Invoices;
