import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between max-w-screen-xl mx-auto h-20  items-center bg-gray-200'>
            <Link to='/'>
                <h3 className='text-3xl text-red-400 p-3'>MASBooks Corner</h3>
            </Link>
            <nav className='text-xl m-4 '>

                <Link to="/" className='ml-3'>Home</Link>
                <Link to="/about" className='ml-3'>About</Link>
                <Link to="/books" className='ml-3'>Books</Link>

            </nav>
        </div>
    );
};

export default Header;