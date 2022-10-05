import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <h1>Expense Management App</h1>
        <hr />
        <div className="links">
          <NavLink to="/" className="link" activeClassName="active" exact>
            Expense List
          </NavLink>
          <NavLink to="/add" className="link" activeClassName="active">
            Add Expense
          </NavLink>
        </div>
      </header>
    );
  };
  
  export default Header;