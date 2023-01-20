import React from 'react';

import EmployeeItem from './EmployeeItem';
import './EmployeeList.css';

const EmployeeList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no employees.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((employee) => (
        <EmployeeItem
          key={employee.id}
          name={employee.name}
          experience={employee.classno}
          dateofjoining={employee.dateofjoining}
        />
      ))}
    </ul>
  );
};

export default EmployeeList;
