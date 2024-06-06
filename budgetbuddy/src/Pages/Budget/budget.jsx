import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './budget.css';

const Budget = () => {

    const data = [
        { name: 'Rent', value: 30 },
        { name: 'Entertainment', value: 15 },
        { name: 'Gas', value: 20 },
        { name: 'Car Insurance', value: 10 },
        { name: 'Internet', value: 9 },
        { name: 'Savings', value: 15 },
        { name: 'Misc.', value: 1 },
      ];
      
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000', '#AAAAAA', '#DDDDDD'];

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <div className="App">
            <div className="chart-container">
                <button onClick={togglePopup}>Edit</button>
                <div className="chart">
                <PieChart width={400} height={400}>
                    <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
                </div>
            <div className="table">
                <table>
                    <thead>
                    <tr>
                        <th>Category</th>
                        <th>Percentage</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((entry, index) => (
                        <tr key={index}>
                        <td>{entry.name}</td>
                        <td>{entry.value}%</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
            {isPopupVisible && (
                <div className="popup">
                <PopupMenu onClose={togglePopup} />
                </div>
            )}
    </div>
  );
};

const PopupMenu = ({ onClose }) => {
  return (
    <div className="popup-menu">
      <h3>Popup Menu</h3>
      <form>
        <label>
          Amount
          <input type="text" name="amount" />
        </label>
        <br />
        <label>
          Add Category
          <input type="text" name="category" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Budget;