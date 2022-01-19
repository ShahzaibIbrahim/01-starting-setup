import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
import React , { useState } from "react";
const NewExpense = (props)  => {

    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString()
        };
        props.addExpense(expenseData);
    };

    const showFormHandler = () => {
        if(showForm) {
            setShowForm(false);
        } else {
            setShowForm(true);
        }
    } 

    return (
        <div className="new-expense">
            {showForm ? <ExpenseForm onCancelAction={showFormHandler} onSaveExpenseData={saveExpenseDataHandler} /> : <button onClick={showFormHandler}>Add New Expense</button>}
        </div>
    );

}

export default NewExpense;