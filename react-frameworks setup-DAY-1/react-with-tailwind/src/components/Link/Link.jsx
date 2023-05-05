import React from 'react';

const Link = ({ route }) => {

    return (
        <li className='mr-11 hover:bg-orange-900'>
            <a href={route.path}>{route.name}</a>

        </li>
    );
};

export default Link;