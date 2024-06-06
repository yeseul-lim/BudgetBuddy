import React from "react";
import './main.css';

const Main = () => {
    return (
        <div className="main-container">
            <div className="column">
                <h1>Your Expenses</h1>
                <h2>$1,835.90</h2>
            </div>
            <div className="column">
                <h1>Budget Left</h1>
                <h2>$1,435.10</h2>
            </div>
            <div className="image-container">
                <img src="/ProgressIndicator.png" alt="Progress Indicator" />
            </div>
            <div className="white-box">
                <div className="content">
                    <div className="left-column">
                        <h3>Your Top 4 Categories</h3>
                    </div>
                    <div className="right-column">
                        <select id="quickactions">
                            <option value="quickActions" selected>Quick Actions</option>
                            <option value="category1">View Details</option>
                            <option value="category2">Add Expense</option>
                            <option value="category3">Edit Categories</option>
                            <option value="category4">Link Account</option>
                            <option value="category5">View Calendar</option>
                        </select>
                    </div>
                </div>
                <div className="graph-container">
                    <img src="/graph.png" alt="Graph" />
                </div>
            </div>
        </div>
    );
};

export default Main;
