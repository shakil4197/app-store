import React from 'react';
import errorPage from '../../assets/App-Error.png';
import { useNavigate } from 'react-router';

const AppNotFound = () => {

    const navigate = useNavigate();


    return (
        <div className='min-h-80 flex gap-5 flex-col justify-center items-center p-10 md:p-15'>
            <img src={errorPage} alt="" />
            <div className='flex flex-col items-center gap-1 md:gap-3'>
                <h1 className='text-2xl font-bold md:text-4xl'>Oops!! App not found!</h1>
                <p className='text-center text-sm md:text-2xl text-gray-400'>The App you are requesting is not found on our system.  please try another apps</p>
            </div>
            <button onClick={()=>navigate(-1)} className="btn btn-primary px-10">Go Back</button>
        </div>
    );
};

export default AppNotFound;