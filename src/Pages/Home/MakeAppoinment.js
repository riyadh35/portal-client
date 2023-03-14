import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section style={
            {
                background: `url(${appointment})`
            }
        } className='flex justify-center items-center my-20 '>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appoinment Today</h2>
                <p className='text-white my-1'>It is a logn establisted fact that a reader will be destracted by the readdble contnent a program looking ai the layout . The point of using Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis praesentium illo natus facere veniam, recusandae sapiente officiis magni quia dicta.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;