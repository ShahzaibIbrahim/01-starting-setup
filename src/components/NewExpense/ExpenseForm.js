import React, { useState } from "react";
import Cards from '../UI/Cards';

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });

const titleChangeHandler = (event) => {
  setEnteredTitle(event.target.value);  
//  setUserInput({
//      ...userInput,
//      enteredTitle: event.target.value
//  })

// if your state depend on previous state, use this kind of function
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value}
    // });
};

const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);  
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // })
};

const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);  
//    setUserInput({
//         ...userInput,
//         enteredDate: event.target.value
//     })
};

const submitHandler = (event) => {
    event.preventDefault();
    
    const expenseData = {
        title: enteredTitle,
        price: +enteredAmount,
        date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    props.onCancelAction();
    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
};

const cancelHandler = (event) => {
    event.preventDefault();

    props.onCancelAction();
};

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <Cards className="new-expense__actions">
        <div>
            <button onClick={cancelHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
      </Cards>
    </form>
  );
};

export default ExpenseForm;
