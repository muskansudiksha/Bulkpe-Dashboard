import React, { useState, useEffect } from "react";
import './TransactionsLists.css';
import success from './success-icon.png';
import failure from './failure-icon.png'

const TransactionsList = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:3500/api/transaction");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTransactions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="transactions-list">
      <h3>Transactions</h3>
      <div className="transaction-header">
        <div>Name</div>
        <div className="status">Status</div>
        <div className="date">Date</div>
        <div className="debit">Debit/Credit</div>
        <div>Amount</div>
      </div>
      {transactions.map((transaction, index) => (
        <div key={index} className="transaction-row">
          <div>{transaction.name}</div>
          <div>
            {transaction.status ? (
              <img src={success} alt="Success" className="imgg"/>
            ) : (
              <img src={failure} alt="Failure" className="imgg"/>
            )}
          </div>
          <div>{transaction.date}</div>
          <div>{transaction.type ? "Credit" : "Debit"}</div>
          <div>{transaction.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default TransactionsList;
