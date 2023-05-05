import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const Phonebar = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhones(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data
                // console.log(loadedData);
                const phonesData = loadedData.map(phone => {
                    const parts = phone.slug.split('-')
                    const price = parseInt(parts[1])
                    const phoneInfo = {
                        Name: phone.phone_name,
                        Price: price
                    }
                    return phoneInfo;
                })
                console.log(phonesData);
                setPhones(phonesData)
            })

    }, [])
    return (
        <div>
            <BarChart width={1000} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8"></Bar>
            </BarChart>
        </div>
    );
};

export default Phonebar;