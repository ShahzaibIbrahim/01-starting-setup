import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Cards from "../UI/Cards";

function ExpenseItem(props) {
  let expenseDate = props.date;
  let expensePrice = props.price;


  return (
    <Cards className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{expensePrice}</div>
      </div>
    </Cards>
  );
}

export default ExpenseItem;
