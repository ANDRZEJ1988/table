import React from 'react';
import './Footer.css';

export const Footer = () => {

    return (
        <div className='footer'>
            <div className='nav'>
                <button>Main</button>
                <button>Physical</button>
                <button>Technical</button>
                <button>Stock</button>
            </div>
            <div className='container'>
                    <div  className='code'>
                        <button className='name'>Code</button>
                        <button>PH1</button>
                    </div>
                    <div className='code'>
                        <button className='name'>Description</button>
                        <button>Philips TV</button>
                    </div>
                </div>
            </div>
    );
}
