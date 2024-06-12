import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <img src="logo.png" alt="Logo" />

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/expense">Expense</Link>
        <Link to="/budget">Budget</Link>
        <Link to="/account">Account</Link>
        <Link to="/login">Log in</Link>
      </nav>
    </header>
  );
};

export default Header;