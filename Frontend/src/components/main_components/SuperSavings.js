import React, { useState, useEffect } from "react";
import logo from "./savingslogo.png";
import "./SuperSavings.css";

const SuperSavings = () => {
  const [savings, setSavings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSavings = async () => {
      try {
        const response = await fetch("http://localhost:3500/api/saving");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setSavings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSavings();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="super-savings-container">
      <h3>Super Savings</h3>
      {savings.map((saving, index) => (
        <div key={index} className="saving-card">
          <img src={logo} alt="Super-Savings-Logo" className="saving-logo" />
          <div className="saving-info">
            <div className="col1">
            <div>
              <p>{saving.current}</p>
              <p className="light">Current Value</p>
            </div>
            <div>
              <p>{saving.invested}</p>
              <p className="light"> Invested Amount</p>
            </div>
            </div>
            <div className="col2">
            <div>
              <p>{saving.interest}%</p>
              <p className="light">Interest Earned</p>
            </div>
            <div>
              <p>{saving.daily}</p>
              <p className="light">Daily Interest</p>
            </div>
            </div>
          </div>
        </div>
      ))}
      <div className="button-iw">
      <button className="invest-button">Invest</button>
      <button className="withdraw-button">Withdraw</button>
      </div>
    </div>
  );
};

export default SuperSavings;
