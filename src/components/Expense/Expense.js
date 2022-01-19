import React, { useState } from "react";
import Cards from "../UI/Cards";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

function Expense(props) {
    const expences = props.expences;
  
    const [year, setYear] = useState('2020');

    const changeYearDropDownHandler = (enteredYear) => {
        console.log('Expense.js');
        console.log(enteredYear);
        setYear(enteredYear);
    };


    return (
      <div>
        <Cards className="expenses">
        <ExpenseFilter  selected={year} onChangeYearDropDown={changeYearDropDownHandler}/>
          {expences.map((expence) => {
            return (<ExpenseItem key={expence.title} title={expence.title} price={expence.price} date={expence.date}></ExpenseItem> )
          })}
        </Cards>
      </div>
      );

}


export default Expense;