import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import AppRouter from '../AppRouter';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';




const Header = () => {
  const [Show, setShow] = useState(false)

  const AddBtn = ()=>{
    setShow(true)
  }
  const close = ()=>{
    setShow(false)
  }
    return (
      <header>
        <h1>Expense Management App</h1>
        <hr />
        <div className="links">
          <div  className="link" activeClassName="active" exact>
            Expense List
          </div>
          <div onClick={AddBtn} className="link" activeClassName="active">
            Add Expense
          </div>



        </div>
{
  Show && (
    <ExpenseForm />
  )
}
       

        <br/>

        
      </header>
    );
  };
  
  export default Header;