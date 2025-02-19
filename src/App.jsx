import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpensess } from "./components/IncomeExpensess";
import { TransactionLists } from "./components/TransactionLists";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpensess />
        <TransactionLists />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
