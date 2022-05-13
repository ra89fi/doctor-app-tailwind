import React from 'react';

const Banner = () => {
    return (
        <div
            className="hero min-h-screen px-12"
            style={{
                backgroundImage: 'url(/assets/images/bg.png)',
            }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="/assets/images/chair.png"
                    className="max-w-xl rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">
                        Your New Smile Starts Here
                    </h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-secondary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
