import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { name, email, phone, id } = friend
    return (
        <div className='friend'>
            <h2>Name:{name}</h2>
            <p>email:{email}</p>
            <p>Phone:{phone}</p>
            <p><Link to={`/friend/${id}`}>Show me details</Link></p>

        </div>
    );
};

export default Friend;