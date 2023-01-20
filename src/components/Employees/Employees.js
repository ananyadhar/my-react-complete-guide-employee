import React, { useState } from 'react';

import Card from '../UI/Card';
import EmployeeFilter from './EmployeeFilter';
import EmployeeList from './EmployeeList';
import EmployeeChart from './EmployeeChart';
import './Employees.css';

const Employees = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredEmployees = props.items.filter((employee) => {
    return employee.dateofjoining.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <EmployeeFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <EmployeeChart employees={filteredEmployees} />
        <EmployeeList items={filteredEmployees} />
      </Card>
    </div>
  );
};

export default Employees;
