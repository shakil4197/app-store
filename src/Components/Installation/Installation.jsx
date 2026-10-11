import React, { useEffect, useState } from 'react';
import InstallAppsCard from '../AppsCards/InstallAppsCard';
import { useLoaderData } from 'react-router';
import { deleteStoredData, getAppsData } from '../../Utility/localDatabase';
import NoAppInstall from '../ErrorPages/NoAppInstall';
import { useRef } from 'react';

const Installation = () => {
    const [installApp, setInstallApp] = useState([]);
    const allData = useLoaderData();
    const selectRef = useRef(null);

    useEffect(() => {
        const storedIds = getAppsData();

        const matchData = allData.filter(item => storedIds.includes(item.id));

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setInstallApp(matchData)

    }, [allData])

    const handleSortChange = (e) => {
        const sortBy = e.target.value;
       
        const sortedList = [...installApp];

        if (sortBy === 'size') {
           
            sortedList.sort((a, b) => {
                const sizeA = parseFloat(a.size) || 0;
                const sizeB = parseFloat(b.size) || 0;
                return sizeB - sizeA;
            });
        } else if (sortBy === 'rating') {
            sortedList.sort((a, b) => {
                const ratingA = parseFloat(a.rating) || 0;
                const ratingB = parseFloat(b.rating) || 0;
                return ratingB - ratingA;
            });
        } else if (sortBy === 'downloads') {
            sortedList.sort((a, b) => {
                const downloadsA = Number(a.downloads) || 0;
                const downloadsB = Number(b.downloads) || 0;
                return downloadsB - downloadsA;
            });
        }

        setInstallApp(sortedList);
    };

    const handleUinstallButton = (id) => {

        const filterData = installApp.filter(item => item.id !== id);

        setInstallApp(filterData);
        deleteStoredData(id);
    }

    return (
        <div className='py-4 px-3 md:p-15 lg:p-20 bg-[#F5F5F5] min-h-120'>
            <div className='flex flex-col items-center gap-2 mb-10'>
                <h1 className='text-3xl font-bold md:text-5xl'>Your Installed Apps</h1>
                <p className='text-center text-lg md:text-2xl text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div>
                <div className='flex justify-between items-center mb-8'>
                    <div>
                        <h1 className='text-lg font-bold md:text-3xl'>{`${installApp.length} Apps Found`}</h1>
                    </div>
                    <div className="border border-gray-300 rounded-lg bg-white px-3 py-2 flex items-center shadow-sm w-fit">
                        <select
                            onChange={handleSortChange}
                            name="sort"
                            id="sort"
                            defaultValue=""
                            className="bg-transparent border-none outline-none text-gray-700 text-sm font-medium cursor-pointer w-full pr-2 focus:ring-0"
                        >
                            <option value="" disabled>Sort By</option>
                            <option value="size">Size</option>
                            <option value="rating">Rating</option>
                            <option value="downloads">Total Download</option>
                        </select>
                    </div>
                </div>
                <div>
                    {
                        installApp.length === 0 ? <NoAppInstall></NoAppInstall> : <div className='space-y-4'>
                            {
                                installApp.map(app => <InstallAppsCard key={app.id} app={app} handleUinstallButton={handleUinstallButton}></InstallAppsCard>)
                            }
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Installation;