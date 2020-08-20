import React from "react";
// import { Header } from "./Expense/Header";
// import { Balance } from "./Expense/Balance";
// import { IncomeExpenses } from "./Expense/IncomeExpenses";
// import './exp.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import About from "./components/About";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <ul className='menu-bar'>
            <li className='menu-li'>
              {" "}
              <Link to="/">Home</Link>{" "}
            </li>
            <li className='menu-li'>
              <Link to="/signin">Sign in</Link>
            </li>
            <li className='menu-li'>
              <Link to="/signup">Sign up</Link>
            </li>
            <li className='menu-li'>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/" exact component={GetStarted} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
      {/* <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
        </div>
      </div> */}
    </div>
  );
}

export default App;
