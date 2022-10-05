import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid';

const ExpenseForm = (props)=> {
    
    const [expense, setExpense] = useState({
        expensename:props.expense ? props.expense.expensename:'',
        price: props.expense ? props.expense.price : ''
    });

    const[errorMsg,setErrorMsg] = useState('');
    const{expensename,price}= expense;

    const handleOnSubmit=(event) => {
        event.preventDefault();
        const values = [expensename,price];
        let errorMsg = '';

    
    const PharmarunFieldsFilled = values.every((field)=> {
        const value = `${field}`.trim();
        return value !== '' && value!=='0';  
      }); 

      if (PharmarunFieldsFilled) {
        const expense = {
            id: uuidv4(),
            expensename,
            price
        };
        props.handleOnSubmit(expense);
      }else{
        errorMsg= 'Please fill out all the fields';
      }
      setErrorMsg(errorMsg);


    };
// Not so clear about this next line of comment
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch(name) {
            case'price':
            if(value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                setExpense((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
            }
            break;
        default:
            setExpense((prevState)=>({
                ...prevState,
                [name]: value
            }));
        }
    };

    return(
        <div className= "main-form">
            {errorMsg && <p className= "errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId ="name">
                    <Form.Label>Expense Name</Form.Label>
                    <Form.Control
                      className="input-control"
                      type="text"
                      name="expensename"
                      value={expensename}
                      placeholder="Enter the name of expense"
                      onChange={handleInputChange}
                />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Expense Price</Form.Label>
                    <Form.Control
                      className = "input-control"
                      type="number"
                      name="price"
                      value={price}
                      placeholder="Enter price of expense"
                      onChange={handleInputChange}
                
                    />
                </Form.Group>
                <Button variant ="primary" type="submit" className="submit-btn">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default ExpenseForm;