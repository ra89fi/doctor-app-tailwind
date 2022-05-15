import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Info from '../components/Info';
import MakeAppointment from '../components/MakeAppointment';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <MakeAppointment />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;
