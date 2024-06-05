// src/components/Header.js
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
    <img src="logo.png" alt="" />

    <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/expense">Expense</Link>
        <Link to="/budget">Budget</Link>
        <Link to="/setting">Setting</Link>
        <Link to="/login">Log in</Link>
      </nav>
    </header>
  );
};

export default Header;