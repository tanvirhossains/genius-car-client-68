import React from 'react';
import sleep from '../../../../images/achievementbg.jpg'
import './Notfound.css'

const Notfound = () => {
    return (
        <div className='checkout-container'  style={{ backgroundImage: `url(${sleep})` }}>
            <h1 className='text-primary text-cente p-5'>Mr car doctor is ghumay!!!!!</h1>
            {/* <img className='w-100' src={sleep} alt="" /> */}
        </div>
    );
};

export default Notfound;