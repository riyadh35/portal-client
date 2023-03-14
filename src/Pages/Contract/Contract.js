import React from 'react';
import bgpic from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Contract = () => {
    return (
        <section style={
            {
                background: `url(${bgpic})`
            }
        } className='justify-center items-center text-center p-20 my-10'>
            <div>
                <h1 className='text-xl text-primary font-bold mt-20'>Contract Us</h1>
                <h3 className='text-white text-3xl mb-10'>Stay connected with us</h3>
                <input type="text" placeholder="Email Address" className="input w-1/3 mb-2" /><br />
                <input type="text " placeholder="Subject" className="input w-1/3 mb-2" />
                <br />
                <textarea className="textarea w-1/3 mb-2" placeholder="Your message"></textarea>
                <br />
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default Contract;