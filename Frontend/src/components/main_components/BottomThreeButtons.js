import React from 'react';
import './BottomThreeButtons.css';
import loan from './loans.png'
import fd from './Fd.png'

const BottomThreeButtons = () => {
    return (
        <div className="bottom-three-buttons">
            <div className='container'>
                <div>
                    <button className="button-one" onClick={() => console.log('Button 1 clicked')}>
                        <img className='pic' src={fd} alt="img" />
                        <p>Fixed <br/>Deposits</p>
                    </button>
                </div>

                <div>
                    <button className="button-two" onClick={() => console.log('Button 2 clicked')}>
                        <img className='pic' src={loan} alt="img" />
                        <p className='loanss'>Loans</p>
                    </button>
                </div>
            </div>
            <div><button className="button-three" onClick={() => console.log('Button 3 clicked')}>Explore Exciting Offers</button></div>
        </div>
    );
};

export default BottomThreeButtons;