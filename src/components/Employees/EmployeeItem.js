import React from 'react';

import EmployeeDate from './EmployeeDate';
import Card from '../UI/Card';
import './EmployeeItem.css';

const EmployeeItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <EmployeeDate dateofjoining={props.dateofjoining} />
        <div className="expense-item__description">
          <div className="expense-item__description">
            <h2>{props.name}</h2>
          </div>
          <div className="expense-item__price">{props.experience}</div>
        </div>
      </Card>
    </li>
  );
};

export default EmployeeItem;
