import React, { useContext } from 'react';
import ExpenseForm from './ExpenseForm';
import { useParams } from 'react-router-dom';
import ExpenseContext from '../context/Expensecontext';

const EditExpense = ({ history }) => {
  const { expense, setExpense } = useContext(ExpenseContext);
  const { id } = useParams();
  const expenseToEdit = expense.find((expense) => expense.id === id);

  const handleOnSubmit = (expense) => {
    const filteredExpense = expense.filter((expense) => expense.id !== id);
    setExpense([expense, ...filteredExpense]);
    history.push('/');
  };

  return (
    <div>
      <ExpenseForm expense={expenseToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditExpense;
