import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserData from './UserData';

const MyUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessTo')}`
        }
    })
        .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">My users {users.length}</h2>
            <div>
                <table className='table w-full '>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favourite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserData
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserData>)
                        }
                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default MyUsers;