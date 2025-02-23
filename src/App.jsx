import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpensess } from "./components/IncomeExpensess";
import { TransactionLists } from "./components/TransactionLists";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from './Context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpensess />
        <TransactionLists />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
