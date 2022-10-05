import React from 'react';
import ExpenseForm from './ExpenseForm';
//import ReactDOM from 'react-dom';

const AddExpense = ({ history, expenses, setExpense }) => {
    const handleOnSubmit = (book) => {
      setExpense([expenses, ...expenses]);
      history.push('/');
    };
  
    return (
      <React.Fragment>
        <ExpenseForm handleOnSubmit={handleOnSubmit} />
      </React.Fragment>
    );
  };
  
  export default AddExpense;