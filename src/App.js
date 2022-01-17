import Expense from "./components/Expense";

function App() {
  const expences = [
    { title: "Car", price: "28", date: new Date(2021, 2, 4)  }, 
    { title: "Bike", price: "28", date: new Date(2021, 2, 4)  }, 
    { title: "Rickshaw", price: "28", date: new Date(2021, 2, 4)  }, 
    { title: "TukTuk", price: "28", date: new Date(2021, 2, 4)  },
  ];

  return (
    <div>
      <Expense expences={expences}></Expense>
    </div>
  );
}

export default App;
