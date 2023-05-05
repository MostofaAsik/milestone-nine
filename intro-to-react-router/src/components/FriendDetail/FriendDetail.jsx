import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData()
    console.log(friend);
    return (
        <div>
            <h3>Everything about my friend details</h3>
            <h3>Name:{friend.name}</h3>
            <h2>Phone{friend.phone}</h2>

        </div>
    );
};

export default FriendDetail;