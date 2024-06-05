// src/components/Header.js
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
    <img src="logo.png" alt="" />

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#expense">Expense</a>
        <a href="#budget">Budget</a>
        <a href="#setting">Setting</a>
        <a href="#login">Log in</a>
      </nav>
    </header>
  );
};

export default Header;