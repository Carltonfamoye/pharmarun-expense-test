import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Expense = ({
    id,
    expensename,
    price,
    handleRemoveExpense
  }) => {
    const history = useNavigate();
  
    return (
      <Card style={{ width: '18rem' }} className="expense">
        <Card.Body>
          <Card.Title className="expense-title">{expensename}</Card.Title>
          <div className="expense-details">
            <div>Expensename: {expensename}</div>
            <div>Price: {price} </div>
          </div>
          <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
            Edit
          </Button>{' '}
          <Button variant="danger" onClick={() => handleRemoveExpense(id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    );
  };
  
export default Expense;