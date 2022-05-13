import React from 'react';

const InfoCard = ({ img, title, desc, bgClass }) => {
    return (
        <div
            className={`card lg:card-side bg-base-100 shadow-xl text-white ${bgClass}`}
        >
            <figure className="pl-3">
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default InfoCard;
