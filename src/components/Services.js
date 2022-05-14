import React from 'react';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: 'fluoride',
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: 'cavity',
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: 'whitening',
        },
    ];
    return (
        <div className="my-28">
            <div className="text-center">
                <h3 className="text-primary text-xl font-bold uppercase">
                    Our Services
                </h3>
                <h2>Services We Provide</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
                {services.map((item) => (
                    <Service key={item._id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Services;
