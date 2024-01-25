import React from 'react';
import{Link} from 'react-router-dom';
import'./Navbar.css';
import bellIcon from '../notificationbell.jpg';
import profileIcon from '../profile-icon.jpg';

const Navbar =()=>{
    return(
        <header className="topbar">
            <div className="topbar-greeting">
                <p>Good morning, Ajay</p>
            </div>
            <div className='col22'>
            <div className="topbar-instant-payout">
                    <button className="instant-payout-btn">Instant Payout</button>
                </div>
                <div className="topbar-search">
                    <input type="text" placeholder="Search for anything" />
                    {/* <button type="submit">Q</button> */}
                </div>
                <div className="topbar-bellicon">
                    <Link to="#" className="notification-link">
                    <img src={bellIcon} alt="Notifications" className="bellicon" />
                    </Link>
                </div>
                <div className="topbar-profile">
                    <Link to="#" className="profile-link">
                    <img src={profileIcon} alt="Profile" className='profileicon'/>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;