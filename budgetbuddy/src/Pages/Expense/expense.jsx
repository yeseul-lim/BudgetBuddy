import React, { useState } from 'react';
import './expense.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';


const Expense = () => {
  const [view, setView] = useState('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [transactions, setTransactions] = useState([
    { id: 1, date: '04.14.2024-Mon', category: 'Food', content: 'Chipotle', amount: '$18.56', payment: 'Chase Debit - 0000', receipt: 'Available' },
    { id: 2, date: '04.15.2024-Tue', category: 'Transport', content: 'Uber', amount: '$12.34', payment: 'Chase Credit - 8888', receipt: 'Available' },
    { id: 3, date: '04.16.2024-Wed', category: 'Grocery', content: 'Walmart', amount: '$45.67', payment: 'BOA Debit - 1234', receipt: 'Available' },
    { id: 4, date: '04.17.2024-Thu', category: 'Entertainment', content: 'Netflix', amount: '$9.99', payment: 'BOA Credit - 5678', receipt: 'Available' },
    { id: 5, date: '04.18.2024-Fri', category: 'Dining', content: 'Pizza Hut', amount: '$22.50', payment: 'Chase Debit - 0000', receipt: 'Available' },
    { id: 6, date: '04.19.2024-Sat', category: 'Shopping', content: 'Amazon', amount: '$120.00', payment: 'Chase Credit - 8888', receipt: 'Available' },
    { id: 7, date: '04.20.2024-Sun', category: 'Bills', content: 'Electricity Bill', amount: '$75.00', payment: 'BOA Debit - 1234', receipt: 'Available' },
    { id: 8, date: '04.21.2024-Mon', category: 'Health', content: 'CVS Pharmacy', amount: '$15.30', payment: 'BOA Credit - 5678', receipt: 'Available' },
    { id: 9, date: '04.22.2024-Tue', category: 'Transport', content: 'Gas Station', amount: '$40.00', payment: 'Chase Debit - 0000', receipt: 'Available' },
    { id: 10, date: '04.23.2024-Wed', category: 'Food', content: 'Starbucks', amount: '$5.25', payment: 'Chase Credit - 8888', receipt: 'Available' },
    { id: 11, date: '04.24.2024-Thu', category: 'Entertainment', content: 'Movie Theater', amount: '$14.00', payment: 'BOA Debit - 1234', receipt: 'Available' },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleSliderChange = (e) => {
    setView(e.target.value === '0' ? 'list' : 'calendar');
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  };

  const handleDrop = (e, id) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text');
    if (data === 'delete-btn') {
      setTransactions(transactions.filter(transaction => transaction.id !== id));
    }
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, { ...newTransaction, id: transactions.length + 1, receipt: 'Available' }]);
  };

  const Popup = ({ show, handleClose, addTransaction }) => {
    const [formData, setFormData] = useState({
      date: '',
      amount: '',
      category: '',
      content: '',
      payment: 'Chase Debit - 0000'
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      addTransaction(formData);
      handleClose();
    };

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Enter date"
              />
            </Form.Group>
            <Form.Group controlId="formAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
              />
            </Form.Group>
            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Enter category"
              />
            </Form.Group>
            <Form.Group controlId="formContent">
              <Form.Label>Content</Form.Label>
              <Form.Control
                type="text"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Enter content"
              />
            </Form.Group>
            <Form.Group controlId="formPayment">
              <Form.Label>Payment Method</Form.Label>
              <Form.Control
                as="select"
                name="payment"
                value={formData.payment}
                onChange={handleChange}
              >
                <option>Chase Debit - 0000</option>
                <option>Chase Credit - 8888</option>
                <option>BOA Debit - 1234</option>
                <option>BOA Credit - 5678</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Transaction
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <div className="expense-page">
      <div className="header-controls">
        <div className="slider-container">
          <label className="slider-label" htmlFor="view-slider">View: </label>
          <input
            type="range"
            id="view-slider"
            min="0"
            max="1"
            step="1"
            value={view === 'list' ? '0' : '1'}
            onChange={handleSliderChange}
            className="slider"
          />
          <div className="slider-labels">
            <span className={view === 'list' ? 'active' : ''}>List</span>
            <span className={view === 'calendar' ? 'active' : ''}>Calendar</span>
          </div>
        </div>
      </div>

      {view === 'list' ? (
        <div className="list-view">
          <div className="controls">
            <button className="add-btn btn btn-primary" onClick={() => setShowModal(true)}>Add</button>
            <button
              id="delete-btn"
              className="delete-btn btn "
              draggable="true"
              onDragStart={handleDragStart}
            >Drag for delete!</button>
            <input
              type="text"
              placeholder="Search.."
              className="form-control"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Content</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Receipt</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr
                  key={tx.id}
                  onDrop={(e) => handleDrop(e, tx.id)}
                  onDragOver={allowDrop}
                >
                  <td>{tx.date}</td>
                  <td>{tx.category}</td>
                  <td>{tx.content}</td>
                  <td>{tx.amount}</td>
                  <td>{tx.payment}</td>
                  <td>{tx.receipt}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
  ) : (
    <div className="calendar-view">
      <img src="expense_cal.png" alt="" id="expense_cal_img" />
    </div>
  )}

  <Popup
    show={showModal}
    handleClose={() => setShowModal(false)}
    addTransaction={addTransaction}
  />
</div>
);
};

export default Expense;