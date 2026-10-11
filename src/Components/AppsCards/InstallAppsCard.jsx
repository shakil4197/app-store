import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { MdFileDownloadOff } from 'react-icons/md';

const InstallAppsCard = ({app, handleUinstallButton}) => {

    const { id, title, image, downloads, size, ratingAvg } = app; 

    return (
        <div className='bg-white p-4 rounded-lg flex items-center'>
            <div className='flex-2 flex gap-3 md:gap-6'>
                <div><img src={image} alt={`${title} image`} className='w-15 h-15 md:w-25 md:h-25 rounded-lg'/></div>
                <div className='flex flex-col justify-evenly md:gap-3'>
                    <div><h2 className='text-lg font-bold md:text-4xl'>{title}</h2></div>
                    <div className='flex gap-3 items-center md:gap-10 md:text-xl'>
                        <p className='flex items-center gap-1 font-semibold text-green-500'><FiDownload/> {downloads}</p>
                        <p className='flex items-center gap-1 font-semibold text-orange-500'><FaStar/> {ratingAvg}</p>
                        <p className='flex items-center gap-1 font-semibold text-gray-500'>{size} MB</p> 
                    </div>
                </div>
            </div>

            <div className=''>
                <button onClick={()=> handleUinstallButton(id)} className="bg-green-500 p-1 text-xl text-orange-600 md:hidden"><MdFileDownloadOff/></button>
                <button onClick={()=> handleUinstallButton(id)} className="btn btn-success hidden md:block">Uninstall</button>
            </div>
        </div>
    );
};

export default InstallAppsCard;