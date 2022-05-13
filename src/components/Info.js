import React from 'react';
import InfoCard from './InfoCard';
import clock from '../assets/icons/clock.svg';
import marker from '../assets/icons/marker.svg';
import phone from '../assets/icons/phone.svg';

const infoData = [
    {
        img: clock,
        title: 'Opening Hours',
        desc: 'This is info card description',
        bgClass: 'bg-gradient-to-r from-secondary to-primary',
    },
    {
        img: marker,
        title: 'Our Locations',
        desc: 'This is info card description',
        bgClass: 'bg-accent',
    },
    {
        img: phone,
        title: 'Contact Us',
        desc: 'This is info card description',
        bgClass: 'bg-gradient-to-r from-secondary to-primary',
    },
];

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
            <InfoCard {...infoData[0]} />
            <InfoCard {...infoData[1]} />
            <InfoCard {...infoData[2]} />
        </div>
    );
};

export default Info;
