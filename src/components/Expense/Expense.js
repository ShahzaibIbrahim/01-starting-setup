import React, { useState } from "react";
import Cards from "../UI/Cards";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";

function Expense(props) {
  const [year, setYear] = useState("2020");

  const changeYearDropDownHandler = (enteredYear) => {
    setYear(enteredYear);
  };

  const filteredExpenses = props.expences.filter(expense => 
    { return expense.date.getFullYear().toString() === year;  }
  );

  return (
    <div>
      <Cards className="expenses">
        <ExpenseFilter
          selected={year}
          onChangeYearDropDown={changeYearDropDownHandler}
        />
        <ExpensesList filteredExpenses={filteredExpenses}/>
      </Cards>
    </div>
  );
}

export default Expense;
