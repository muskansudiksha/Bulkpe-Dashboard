import React, { useState, useEffect } from "react";
import "./fixedDeposits.css";
import logo from "./deposit.png";

const FixedDeposits = () => {
  const [deposits, setDeposits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeposits = async () => {
      try {
        const response = await fetch("http://localhost:3500/api/deposit");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setDeposits(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDeposits();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div className="fixed-deposits-container">
      <h3 className="p">Fixed Deposits</h3>
      {deposits.map((deposit, index) => (
        <div key={index} className="fixed-deposit-card">
          <img src={logo} alt="Logo" className="fd-logo" />
          <div classname="col1">
            <p>Maturity on</p>
            <p>{deposit.maturityDate}</p>
          </div>
          <div classname="col2">
            <p>{deposit.amount}</p>
            <p><span className="span">8%</span></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FixedDeposits;
