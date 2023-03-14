import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';


const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening Hours" bgClassName="bg-gradient-to-r from-green-400 to-primary hover:from-pink-500 hover:to-yellow-500" img={clock}></InfoCard>
            <InfoCard cardTitle="Our location" bgClassName="bg-gradient-to-r from-accent to-blue-500 hover:from-pink-500 hover:to-yellow-500" img={marker}></InfoCard>
            <InfoCard cardTitle="Contract Us" bgClassName="bg-gradient-to-r from-green-400 to-primary hover:from-pink-500 hover:to-yellow-500" img={phone}></InfoCard>
        </div >
    );
};

export default Info;