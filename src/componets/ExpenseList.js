import React, {useContext} from 'react';
import _ from 'lodash';
import Expense from './Expense';
import ExpenseContext from '../context/Expensecontext';


const ExpenseList = () =>{ 
  const { expense, setExpense } = useContext(ExpenseContext);

 
  
    const handleRemoveExpense = (id) => {
      setExpense(expense.filter((expense) => expense.id !== id));
    };
  
    return (
      <React.Fragment>
        <div className="expense-list">
          {!_.isEmpty(expense) ? (
            expense.map((expense) => (
              <Expense key={expense.id} {...expense} handleRemoveExpense={handleRemoveExpense} />
            ))
          ) : (
            <p className="message">No expenses available. Please add some expenses.</p>
          )}

        </div>
      </React.Fragment>
    );
  };
  
  export default ExpenseList;