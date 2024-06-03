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
        <Route path="" element={<Main />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/addAccount" element={<AddAccount />}></Route>
        <Route path="/expense" element={<Expense />}></Route>
        <Route path="/budget" element={<Budget />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
