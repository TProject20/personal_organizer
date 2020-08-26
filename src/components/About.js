import React from "react";
import { Header } from "../Expense/Header";
import { Balance } from "../Expense/Balance";
import { IncomeExpenses } from "../Expense/IncomeExpenses";
import { TransActionList } from "../Expense/TransactionList";
import { AddTransaction } from "../Expense/AddTransaction";

import {GlobalProvider} from '../context/GlobalState';

import "../exp.css";

export default function About() {
  return (
    <GlobalProvider>
      <Header />
      <div className="exp-container">
        <Balance />
        <IncomeExpenses />
        <TransActionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
