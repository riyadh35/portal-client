import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import ServiceBanner from './ServiceBanner';

const Services = () => {
    return (
        <div className='my-14'>
            <div className='text-center '>
                <h1 className='text-primary font-bold text-2xl uppercase'>Our Services</h1>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20'>
                <Service title="Fluoride Treatment" img={fluoride}></Service>
                <Service title="Cavity Filling" img={cavity}></Service>
                <Service title="Teeth Whitening" img={whitening}></Service>
            </div>
            <ServiceBanner></ServiceBanner>
        </div>
    );
};

export default Services;