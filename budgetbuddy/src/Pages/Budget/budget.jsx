import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import './budget.css'; // Import your CSS file for styling

const initialData = [
  { name: 'Rent', allocated: 1000, used: 950 },
  { name: 'Entertainment', allocated: 500, used: 300 },
  { name: 'Gas', allocated: 200, used: 150 },
  { name: 'Car Insurance', allocated: 300, used: 300 },
  { name: 'Internet', allocated: 100, used: 90 },
  { name: 'Savings', allocated: 800, used: 600 },
  { name: 'Misc.', allocated: 50, used: 45 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000', '#AAAAAA', '#DDDDDD'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  if (index >= initialData.length) {
    return null;
  }
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
      fontSize={10} // Adjust font size if necessary
    >
      {`${initialData[index].name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const App = () => {
  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
  const [isAddPopupVisible, setIsAddPopupVisible] = useState(false);
  const [clickedCategory, setClickedCategory] = useState(null);
  const [data, setData] = useState(initialData);

  const toggleEditPopup = () => {
    setIsEditPopupVisible(!isEditPopupVisible);
  };

  const toggleAddPopup = () => {
    setIsAddPopupVisible(!isAddPopupVisible);
  };

  const handleChartClick = (data, index) => {
    setClickedCategory(data[index]);
    toggleEditPopup();
  };

  const updateCategory = (updatedCategory) => {
    const updatedData = data.map((item) =>
      item.name === updatedCategory.name ? { ...updatedCategory } : item
    );
    setData(updatedData);
    toggleEditPopup();
  };

  const addCategory = (newCategory) => {
    setData([...data, newCategory]);
    toggleAddPopup();
  };

  return (
    <div className="App">
      <div className="chart-container">
        <div className="total-budget">
          <h4>Total Budget: $2950</h4>
        </div>
        <div className="chart">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={145} // Reduce the size of the pie chart
                fill="#8884d8"
                dataKey="allocated"
                onClick={(event, data, index) => handleChartClick(data, index)}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <button onClick={toggleAddPopup}>Add Category</button>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Amount Allocated</th>
                <th>Amount Used</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.name}</td>
                  <td>${entry.allocated}</td>
                  <td>${entry.used}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isEditPopupVisible && (
        <div className="popup">
          <EditPopupMenu onClose={toggleEditPopup} clickedCategory={clickedCategory} updateCategory={updateCategory} />
        </div>
      )}
      {isAddPopupVisible && (
        <div className="popup">
          <AddPopupMenu onClose={toggleAddPopup} addCategory={addCategory} />
        </div>
      )}
    </div>
  );
};

const EditPopupMenu = ({ onClose, clickedCategory, updateCategory }) => {
  const [editedCategory, setEditedCategory] = useState(clickedCategory);

  const handleAmountChange = (event) => {
    const { name, value } = event.target;
    setEditedCategory((prevCategory) => ({
      ...prevCategory,
      [name]: parseInt(value) || 0
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCategory(editedCategory); // Call updateCategory with editedCategory
  };

  // Make sure to update editedCategory when clickedCategory changes
  useEffect(() => {
    setEditedCategory(clickedCategory);
  }, [clickedCategory]);

  return (
    <div className="popup-menu">
      <h3>Edit {clickedCategory ? clickedCategory.name : ''}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Amount Allocated
          <input
            type="number"
            name="allocated"
            value={editedCategory ? editedCategory.allocated : ''}
            onChange={handleAmountChange}
          />
        </label>
        <br />
        <label>
          Amount Used
          <input
            type="number"
            name="used"
            value={editedCategory ? editedCategory.used : ''}
            onChange={handleAmountChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const AddPopupMenu = ({ onClose, addCategory }) => {
  const [newCategory, setNewCategory] = useState({ name: '', allocated: 0, used: 0 });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCategory((prevCategory) => ({
      ...prevCategory,
      [name]: name === 'name' ? value : parseInt(value) || 0
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCategory(newCategory); // Call addCategory with newCategory
  };

  return (
    <div className="popup-menu">
      <h3>Add New Category</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Category Name
          <input
            type="text"
            name="name"
            value={newCategory.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Amount Allocated
          <input
            type="number"
            name="allocated"
            value={newCategory.allocated}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Amount Used
          <input
            type="number"
            name="used"
            value={newCategory.used}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default App;
