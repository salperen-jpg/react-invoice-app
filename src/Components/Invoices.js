import React, { useEffect } from 'react';
import './Invoices.css';
import { useGlobalContext } from '../context';
import Invoice from './Invoice';
const Invoices = () => {
  const { filtered, firstRender } = useGlobalContext();

  useEffect(() => {
    firstRender();
  }, []);
  console.log(filtered);
  return (
    <article className='invoices'>
      {filtered.map((invoice) => {
        return <Invoice key={invoice.id} {...invoice} />;
      })}
    </article>
  );
};

export default Invoices;
