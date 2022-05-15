import React from 'react';
import quote from '../assets/icons/quote.svg';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Harry Winson',
            review: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
            img: '/assets/images/people1.png',
            location: 'California',
        },
        {
            _id: 2,
            name: 'Harry Winson',
            review: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
            img: '/assets/images/people2.png',
            location: 'California',
        },
        {
            _id: 3,
            name: 'Harry Winson',
            review: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
            img: '/assets/images/people3.png',
            location: 'California',
        },
    ];
    return (
        <section className="my-20 px-12">
            <div className="flex justify-between">
                <div>
                    <h4 className="text-xl text-primary font-bold">
                        Testimonials
                    </h4>
                    <h2 className="text-3xl">What our customers say...</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {reviews.map((item) => (
                    <Review {...item} key={item._id} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
