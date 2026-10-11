import React, { useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import HomeAppCards from '../AppsCards/HomeAppCards';
import AppNotFound from '../ErrorPages/AppNotFound';

const AppsPage = () => {
    const inputRef = useRef(null);
    const allApps = useLoaderData();
    const [appsData, setAppsData] = useState(allApps);
    const [itemFind, setItemFind] = useState(true);


    const handleOnSearch = () => {
        const value = inputRef.current.value.toLowerCase().trim();

        if (!value) {
            setAppsData(allApps);
        } else {
            const filterData = allApps.filter(item => item.title.toLowerCase().includes(value));

            if(!value && filterData.length == 0)
            {
                setItemFind(false)
            }else if(filterData.length == 0){
                setItemFind(false)
            }else{
                setItemFind(true);
                setAppsData(filterData);
            }

        }

    }

    return (
        <div className='p-3 md:p-15 lg:p-20 bg-[#F5F5F5]'>

            <div className='space-y-3'>
                <h1 className='text-center text-2xl font-bold md:text-4xl lg:text-6xl'>Our All Applications</h1>
                <p className='text-center text-gray-400 md:text-2xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='mt-10 lg:mt-15'>
                <div className='flex gap-3 flex-col-reverse md:flex-row justify-between lg:items-center mb-3 lg:mb-5 lg:mx-20'>
                    <div>
                        <h1 className='md:text-2xl font-bold'>({appsData.length}) Apps Found</h1>
                    </div>
                    <div className='flex gap-2'>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input onChange={handleOnSearch} type="search" required placeholder="Search" ref={inputRef} />
                        </label>
                        <button onClick={() => handleOnSearch()} className="btn bg-gray-200">Search</button>
                    </div>
                </div>
                <div>

                    <div className={`${itemFind ? 'hidden' : 'block'} min-h-40 flex items-center justify-center`}>
                        <h1 className='text-xl md:text-4xl font-bold text-gray-400'>Oops!! App not found..</h1>
                    </div>

                    <div className={`${itemFind ? 'block' : 'hidden'} grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5`}>

                        {
                            appsData.map(data => <HomeAppCards key={data.id} data={data}></HomeAppCards>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppsPage;