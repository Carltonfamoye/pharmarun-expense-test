import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <h1> Pharmarun Expense Management App</h1>
            <hr />
            <div className="links">
                <NavLink to="/" className="link" activeClassName="active" exact>
                    Expenses List
                </NavLink>
                <NavLink to="/add" className="link" activeClassName="active">
                    Add expense
                </NavLink>
            </div>
        </header>
    );
};
export default Header;