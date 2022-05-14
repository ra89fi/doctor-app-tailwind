import React from 'react';

const MakeAppointment = () => {
    return (
        <section
            className="flex justify-center items-center"
            style={{ backgroundImage: 'url(/assets/images/appointment.png)' }}
        >
            <div className="flex-1 hidden lg:block">
                <img
                    className="mt-[-150px]"
                    src="/assets/images/doctor.png"
                    alt="Doctor"
                />
            </div>
            <div className="flex-1">
                <h3 className="text-xl text-primary">Appointment</h3>
                <h2 className="text-3xl text-white">
                    Make an Appointment today!
                </h2>
                <p className="text-white py-3">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-secondary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default MakeAppointment;
