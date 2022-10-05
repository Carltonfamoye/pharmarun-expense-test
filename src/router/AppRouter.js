/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
        <Header />
        <div className ="main-content">
            <Switch>
                <Route component={ExpenseList} path="/" exact={true}/>
                <Route component = {AddExpense} path="/add"/>

            </Switch>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
*/
import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Header from '../componets/Header';
import AddExpense from '../componets/AddExpense';
import ExpenseList from '../componets/ExpenseList';


// idg this page real

const AppRouter = () => {
    return(
        <BrowserRouter>
        <div>
            <Header />
            <div className ="main-content">
                <Routes>
                    <Route component={ExpenseList} path="/" exact={true}/>
                    <Route component = {AddExpense} path="/add"/>

                </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
};
export default AppRouter;