import React from 'react';

const Testmonial = ({ review }) => {
    return (
        <div className='card lg:max-w-lg  bg-base-100 shadow-xl'>
            <div className='card-body'>
                <p>{review.review}</p>
            </div>
            <div className=' flex items-center p-4'>
                <div className="avatar">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={review.img} alt="" />
                    </div>
                </div>
                <div>
                    <h4 className='text-xl'>{review.name}</h4>
                    <h4>{review.location}</h4>
                </div>
            </div>
        </div>
    );
};

export default Testmonial;