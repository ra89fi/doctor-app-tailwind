import React from 'react';
import Banner from '../components/Banner';
import Info from '../components/Info';
import MakeAppointment from '../components/MakeAppointment';
import Services from '../components/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <MakeAppointment />
        </div>
    );
};

export default Home;
