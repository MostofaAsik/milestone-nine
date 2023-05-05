import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Books = () => {
    const { books } = useLoaderData()
    console.log(books);
    return (
        <div className='ml-20 mr-20 mt-6'>
            <h4 className='text-3xl mb-3 text-green-500 text-center
            '>Books Corner</h4>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                {
                    books.map(book => <Book
                        key={book.isbn13}
                        book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;