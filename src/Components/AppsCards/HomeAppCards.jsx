import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router';

const HomeAppCards = ({ data }) => {
    const { id, image, title, downloads, ratingAvg } = data;
    return (
        <Link to={`/details/${id}`}>
            <div className='p-4 shadow-xl bg-white space-y-3'>
                <img src={image} alt={`${title} - Image`} className='w-full h-60 md:h-80' />
                <h2 className='text-lg md:text-2xl font-semibold'>{title}</h2>

                <div className='flex justify-between items-center'>
                    <div className='bg-green-100 px-3 rounded-lg'><p className='flex items-center gap-1 text-lg text-green-600 font-semibold'><FaDownload /> {downloads}</p></div>
                    <div className='bg-orange-100 px-3 rounded-lg'><p className='flex items-center gap-1 text-lg text-orange-600 font-semibold'><FaDownload /> {ratingAvg}</p></div>
                </div>
            </div>
        </Link>
    );
};

export default HomeAppCards;