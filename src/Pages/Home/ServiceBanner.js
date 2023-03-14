import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const ServiceBanner = () => {
    return (
        <div className="home-own-style hero min-h-screen mb-20">
            <div className="hero-content w-11/12 flex-col lg:flex-row-reverse">
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>

                <img src={treatment} className=" w-2/5  rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default ServiceBanner;