import React from 'react';
import './Left.css';
export const Left =()=>{

        return (
            <div className='left'>
                <div className='container'>
                    <button className='one'>-</button>
                    <div className='group'>
                        <button className='btn'>Category 1</button>
                        <button className='btn'>Category 2</button>
                        <button className='btn'>Category 3</button>
                        <button className='btn'>Category 4</button>
                        <button className='btn'>Category 5</button>
                        <button className='btn'>Category 6</button>
                    </div>
                </div>
            </div>
        );
    }
