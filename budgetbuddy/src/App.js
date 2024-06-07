import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/main.jsx";
import Account from "./Pages/LinkedAccount/account.jsx";
import AddAccount from "./Pages/AddAccount/addAccount.jsx";
import Expense from "./Pages/Expense/expense.jsx";
import Budget from "./Pages/Budget/budget.jsx";
import Header from "./Components/organisms/Header/header.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={<Account />} />
        <Route path="/addAccount" element={<AddAccount />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </Router>
  );
}

export default App;