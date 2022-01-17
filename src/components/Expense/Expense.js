import "./Expense.css";
import ExpenseItem from "./ExpenseItem";

function Expense(props) { 

    const expences = props.expences;
    return (
        <div className="expenses">
          <h2>Filos</h2>
          {expences.map((expence) => {
            return (<ExpenseItem key={expence.title} title={expence.title} price={expence.price} date={expence.date}></ExpenseItem> )
          })}
        </div>
      );

}


export default Expense;