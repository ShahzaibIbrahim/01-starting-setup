import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expences = [
    { title: "Car", price: "28", date: new Date(2021, 2, 4)  }, 
    { title: "Bike", price: "28", date: new Date(2021, 2, 4)  }, 
    { title: "Rickshaw", price: "28", date: new Date(2021, 2, 4)  }, 
    { title: "TukTuk", price: "28", date: new Date(2021, 2, 4)  },
  ];

  const addExpenseHandler = (newExpenseData) => {
      expences.push(newExpenseData);
      console.log("App.js");
      console.log(newExpenseData);
  }

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler} />
      <Expense expences={expences}></Expense>
    </div>
  );
}

export default App;
