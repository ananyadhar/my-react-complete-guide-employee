import React, { useState } from 'react';

import './EmployeeForm.css';

const EmployeeForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredClassno, setEnteredExperience] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const experienceChangeHandler = (event) => {
    setEnteredExperience(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const employeeData = {
      name: enteredName,
      classno: +enteredClassno,
      dateofjoining: new Date(enteredDate),
    };

    props.onSaveEmployeeData(employeeData);
    setEnteredName('');
    setEnteredExperience('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Name</label>
          <input
            type='text'
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Years of Experience</label>
          <input
            type='number'
            min='1'
            step='0.5'
            value={enteredClassno}
            onChange={experienceChangeHandler}
          />
        <div className='new-expense__control'>
          <label>Date Of Joining</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Employee</button>
      </div>
      </div>
    </form>
  );
};

export default EmployeeForm;
