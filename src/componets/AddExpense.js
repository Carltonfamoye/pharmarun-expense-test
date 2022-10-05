import React from 'react';
import ExpenseForm from './ExpenseForm';
import ReactDOM from 'react-dom';

const AddExpense = () => {
    const handleOnSubmit = (expense) => {
        console.log(expense);
    };

    return (
        <React.Fragment>
            <ExpenseForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default AddExpense;