import React from "react";
import Header from "./components/header";
import Balance from "./components/balance";
import Expense from "./components/incomExpences";
import TransactionList from "./components/transactionList";
import AddTransaction from "./components/addTransaction";
import { GlobalProvider } from "./context/glopalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Expense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
