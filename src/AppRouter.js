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
import { BrowserRouter,Routes, Route,Navigate} from 'react-router-dom';
import Header from './componets/Header';
import AddExpense from './componets/AddExpense';
import ExpenseList from './componets/ExpenseList';
import useLocalStorage from './hooks/useLocalStorage';
import EditExpense from './componets/EditExpense';
import ExpenseContext from './context/Expensecontext';


const AppRouter = () => {
    const [expense, setExpense] = useLocalStorage('expense', []);
  
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="main-content">
            <ExpenseContext.Provider value={{ expense, setExpense }}>
              <Routes>
                <Route component={ExpenseList} path="/" exact={true} />
                <Route component={AddExpense} path="/add" />
                <Route component={EditExpense} path="/edit/:id" />
                <Route component={() => <Navigate to="/" />} />
              </Routes>
            </ExpenseContext.Provider>
          </div>
        </div>
      </BrowserRouter>
    );
  };
  
  export default AppRouter;
  