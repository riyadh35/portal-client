import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctors = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '490c4d459dae99ccd9a0b4715bcaeacb';

    // REACT QUERY USE
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service')
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    /**
     *          3 ways to store image 
     * 1.Third party storage //Free open public storage is ok for practise project 
     * 2.Your own storage in your own server (file system )
     * 3.Database : Mongodb
     * 
     * YUP: to validate file:Search: Yup file validation for react hook form 
     */

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    // send to your database

                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log('inserted', inserted)
                            if (inserted.insertedId) {

                                toast.success('Doctor Added Successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed To Add Doctor')
                            }
                        })
                }
            })
    };
    return (
        <div>
            <h2 className="text-2xl">Add Doctors</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            },
                        })}
                    />

                    <label className='label'>
                        {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />

                    <label className='label'>
                        {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}

                    </label>
                </div>

                <div className='form-control w-full max-w-xs'>
                    <label className='label'>
                        <span className='label-text'>Specialty</span>
                    </label>
                    <select {...register('specialty')} className='select input-bordered w-full max-w-xs'>
                        {
                            services.map(service =>
                                <option
                                    key={service._id}
                                    value={service.name}
                                >{service.name}</option>
                            )
                        }
                    </select>

                    <label className='label'>
                        {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" placeholder=""
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is Required'
                            },
                        })}
                    />

                    <label className='label'>
                        {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}

                    </label>
                </div>
                {/* {signInError} */}
                <input className='btn w-full max-w-xs' type="submit" value='ADD DOCTOR' />
            </form>
        </div>
    );
};

export default AddDoctors;