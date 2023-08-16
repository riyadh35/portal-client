import React from 'react';
import { CircleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            {/* <div className='w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin'></div> */}
            <CircleLoader color="#36d7b7" />
        </div>
    );
};

export default Loading;