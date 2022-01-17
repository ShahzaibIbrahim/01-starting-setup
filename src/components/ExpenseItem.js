import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Cards from "./Cards";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  let expenseDate = props.date;
  let expensePrice = props.price;

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Cards className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{expensePrice}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Cards>
  );
}

export default ExpenseItem;
