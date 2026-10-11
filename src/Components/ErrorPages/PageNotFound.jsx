import React from 'react';
import errorPage from '../../assets/error-404.png';
import { Link, useNavigate } from 'react-router';

const PageNotFound = () => {

    const navigate = useNavigate();

    return (
        <div className='min-h-80 flex gap-5 flex-col justify-center items-center p-10 md:p-15'>
            <img src={errorPage} alt="" />
            <div className='flex flex-col items-center gap-1 md:gap-3'>
                <h1 className='text-2xl font-bold md:text-4xl'>Oops, page not found!</h1>
                <p className='text-center text-sm md:text-2xl text-gray-400'>The page you are looking for is not available.</p>
            </div>
            <button onClick={()=>navigate(-1)} class="btn btn-primary px-10">Go Back</button>
        </div>
    );
};

export default PageNotFound;