import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { image, title, price, isbn13, subtitle } = book
    return (
        <Link to={`/book/${isbn13}`}>
            <div className='overflow-hidden rounded shadow-xl hover:shadow-2xl h-full relative  transition duration-200 transform hover:-translate-y-2'>
                <img src={image} alt="book cover image" className='object-cover  w-full h-54' />
                <div className='bg-black text-gray-300 bg-opacity-75 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 px-6 py-4 flex flex-col'>
                    <h1 className='text-xl text-orange-400'>{title}</h1>
                    <br />
                    <p>{subtitle}</p>
                    <br />
                    <p className='mt-auto'>Price:{price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Book;