import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import './budget.css'; // Import your CSS file for styling

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
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = outerRadius + 20; // Position labels outside the slices
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill={COLORS[index % COLORS.length]}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={12} // Adjust font size if necessary
      >
        {`${data[index].name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

const App = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="App">
      <div className="chart-container">
        <div className="chart">
          
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={170} // Reduce the size of the pie chart
                    fill="#8884d8"
                    dataKey="value"
                    >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
          <button onClick={togglePopup}>Edit</button>
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

export default App;
