import React from 'react';

const DateTime = ({ datetime }) => {
  const newDate = new Date(datetime);
  const year = newDate.getFullYear();
  const day = newDate.getDate();
  const month = newDate.toLocaleString('en-US', { month: 'short' });
  const dateString = `Due ${day} ${month} ${year}`;
  return (
    <div>
      <p>{dateString}</p>
    </div>
  );
};

export default DateTime;
