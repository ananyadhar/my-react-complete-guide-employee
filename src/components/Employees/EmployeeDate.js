import React from 'react';

import './EmployeeDate.css';

const EmployeeDate = (props) => {
  const month = props.dateofjoining?.toLocaleString('en-US', { month: 'long' });
  const day = props.dateofjoining?.toLocaleString('en-US', { day: '2-digit' });
  const year = props.dateofjoining?.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default EmployeeDate;
