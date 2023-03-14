import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    // const url = `http://localhost:5000/booking/${id}`

    // const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()));


    // if (isLoading) {
    //     return <Loading></Loading>
    // }




    return (
        <div>
            <h2 className='text-2xl text-purple-600'>Please Pay for: {id}.</h2>
            {/* <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className='card-body'>
                        <h2 className='card-title'>Pay for {appointment.treatment}</h2>
                        <p>We will see you on {appointment.date} at {appointment.slot}</p>
                        <div className='card-actions justify-end'>
                            <button className='btn btn-primary'>Bye Now</button>
                        </div>

                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Payment;