import React from 'react';
import './Invoices.css';
import { useGlobalContext } from '../context';
import Invoice from './Invoice';
const Invoices = () => {
  const { invoices } = useGlobalContext();

  return (
    <article className='invoices'>
      {invoices.map((invoice) => {
        console.log(invoice);
        return <Invoice key={invoice.id} {...invoice} />;
      })}
    </article>
  );
};

export default Invoices;
