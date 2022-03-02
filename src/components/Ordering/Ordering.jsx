import React from 'react';
import './Ordering.css'
import { ordering } from '../../data/ordering';

function Ordering(props) {
    return (
        <div className='orderingContainer'>
            {ordering.map((question) => (
                <div>
                    <h2>{question.title}</h2>
                </div>
            ))}
        </div>
    );
}

export default Ordering;