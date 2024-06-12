import React from "react";
import './main.css';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        switch (selectedValue) {
            case 'details':
                navigate('/budget');
                break;
            case 'add':
                navigate('/expense');
                break;
            case 'edit':
                navigate('/budget');
                break;
            case 'link':
                navigate('/account');
                break;
            default:
                break;
        }
    };

    return (
        <div className="main-container">
            <div className="column">
                <div className="main-text">Your Expenses</div>
                <div className="main-text2">$1,835.90</div>
            </div>
            <div className="column">
                <div className="main-text">Budget Left</div>
                <div className="main-text2">$1,435.10</div>
            </div>
            <div className="image-container">
                <img src="/ProgressIndicator.png" alt="Progress Indicator" />
            </div>
            <div className="main-white-box">
                <div className="main-content">
                    <div className="left-column">
                        <h3>Your Top 4 Categories</h3>
                    </div>
                    <div className="right-column">
                        <div className="select-container">
                            <select id="quickactions" onChange={handleSelectChange}>
                                <option value="quickActions" selected>Quick Actions</option>
                                <option value="details">View Details</option>
                                <option value="add">Add Expense</option>
                                <option value="edit">Edit Categories</option>
                                <option value="link">Link Account</option>
                            </select>
                        </div>
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
