import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    if(props.filteredExpenses.length === 0) {
        return <h2 className='expenses-list__fallback' >No Expenses Found</h2>;
    }

    return (
        <ul className='expenses-list'>   
            {props.filteredExpenses.map((expence, index) => (
                        <ExpenseItem
                        key={index}
                        title={expence.title}
                        price={expence.price}
                        date={expence.date}
                        ></ExpenseItem>
                    )
                )} 
        </ul>
    );

}

export default ExpensesList;