import React, { useState } from 'react';

import NewEmployee from './components/NewEmployee/NewEmployee';
import Employees from './components/Employees/Employees';

const DUMMY_EMPLOYEES = [
  {
    id: "1",
    name: "Ananya",
    experience: 2,
    dateofjoining: new Date(2020, 7, 14),
  },
  {
    id: "2",
    name: "Raju",
    classno: 3,
    dateofjoining: new Date(2021, 2, 12),
  },
  {
    id: "3",
    name: "Ramesh",
    experience: 1,
    dateofjoining: new Date(2021, 2, 28),
  },
  {
    id: "4",
    name: "Minal",
    experience: 1,
    dateofjoining: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [employees, setEmployees] = useState(DUMMY_EMPLOYEES);

  const addEmployeeHandler = (employee) => {
    setEmployees((prevEmployees) => {
      return [employee, ...prevEmployees];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewEmployee onAddEmployee={addEmployeeHandler} />
      <Employees items={employees} />
    </div>
  );
};

export default App;
