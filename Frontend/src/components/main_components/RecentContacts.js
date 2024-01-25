import React, { useState, useEffect } from "react";
import logo from "./contactslogo.png";
import "./RecentContacts.css";

const RecentContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://localhost:3600/api/contacts");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setContacts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="contacts-list">
      <h3>Recent Contacts</h3>
      {contacts.map((contact, index) => (
        <div key={index} className="contact-card">
          <img src={logo} alt="Contact Logo" className="contact-logo" />
          <div className="contact-info">
            <p>{contact.name}</p>
            <p>{contact.contact}</p>
          </div>
          <button className="pay-button">Pay</button>
        </div>
      ))}
    </div>
  );
};

export default RecentContacts;
