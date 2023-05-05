import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-indigo-200 mt-4 rounded-md p-4 flex flex-col'>
            <h1 className='text-center'>
                <span className='text-purple-700 text-5xl font-extrabold '>{price.price}</span>
                <span className='text-2xl'>/mon</span>
            </h1>
            <h2 className='text-2xl font-bold text-center'>{price.name}</h2>
            <p className='underline font-semibold'>Features</p>
            {
                price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='bg-red-500 w-full py-2 rounded
             pb-2 mt-auto'>Buy Now</button>

        </div>
    );
};

export default PriceCard;