import React, { useState, useEffect } from 'react';
import './AccountSummary.css'; 

const AccountSummary = () => {
    const [accountData, setAccountData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAccountData = async () => {
            try {
                const response = await fetch('http://localhost:3500/api/account'); 
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setAccountData(data);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAccountData();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="account-summary-container">
            {accountData.map((account, index) => (
                <div key={index} className="account-card">
                    <div className="account-type"><p>{account.type}</p></div>
                    <div className="account-balance"><p>₹{account.amount}</p></div>
                    <div className="account-number"><p>Account Number</p><p>{account.accountNumber}</p></div>
                    <div className="account-ifsc"><p>IFSC</p><p>{account.ifsc}</p></div>    
                </div>
            ))}
            <div className='buttondiv'><button className='button'>A<br/>D<br/>D<br/><br/><br/> A<br/>C<br/>C<br/>O<br/>U<br/>N<br/>T</button></div>
        </div>
    );
};

export default AccountSummary;