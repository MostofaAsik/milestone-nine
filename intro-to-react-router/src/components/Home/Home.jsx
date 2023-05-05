import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Header></Header>

            <Outlet></Outlet>

        </div>
    );
};

export default Home;