import React, { useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const Pricelist = () => {
    const [prices, setPrices] = useState([]);
    useState(() => {
        fetch("prices.json")
            .then(res => res.json())
            .then(data => setPrices(data))
    }, []);
    return (
        <div className='mx-12'>
            <h2 className='text-4xl text-center font-bold bg-red-300 p-4'>Awesome addorable Prices</h2>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    prices.map(price => <PriceCard
                        key={price.id}
                        price={price}
                    ></PriceCard>)
                }
            </div>

        </div>
    );
};

export default Pricelist;