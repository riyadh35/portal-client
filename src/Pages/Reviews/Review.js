import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Testmonial from './Testmonial';

const Review = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Wilson Herry',
            review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque enim eos alias minus maxime nihil dicta magnam, laboriosam reprehenderit quisquam.',
            img: people1,
            location: 'California'
        },
        {
            _id: 2,
            name: 'Wilson Herry',
            review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque enim eos alias minus maxime nihil dicta magnam, laboriosam reprehenderit quisquam.',
            img: people2,
            location: 'Los Angeles'
        },
        {
            _id: 3,
            name: 'Wilson Herry',
            review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque enim eos alias minus maxime nihil dicta magnam, laboriosam reprehenderit quisquam.',
            img: people3,
            location: 'New Work',
        },
    ];
    return (
        <section className='px-12'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl '>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-20'>
                {
                    reviews.map(review => <Testmonial
                        key={review._id}
                        review={review}
                    ></Testmonial>)
                }
            </div>
        </section>
    );
};

export default Review;