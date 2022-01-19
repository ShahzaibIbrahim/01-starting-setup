import React, {useState} from 'react';

import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  { title: "Car", price: "28", date: new Date(2021, 2, 4)  }, 
  { title: "Bike", price: "30", date: new Date(2019, 2, 4)  }, 
  { title: "Rickshaw", price: "40", date: new Date(2020, 2, 4)  }, 
  { title: "TukTuk", price: "50", date: new Date(2021, 2, 4)  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (newExpenseData) => {
      // setExpenses([newExpenseData, ...expenses]); Wont update State

      setExpenses((prevExpenses) => { 
        return [newExpenseData, ...prevExpenses]
      });
      // console.log("App.js");
      // console.log(newExpenseData);
  }

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler} />
      <Expense expences={expenses}></Expense>
    </div>
  );
}

export default App;
