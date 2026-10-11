import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png';
import starIcon from '../../assets/icon-ratings.png';
import likeIcon from '../../assets/icon-review.png';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import CommentCard from './CommentCard';
import toast from 'react-hot-toast';
import { storedAppsData } from '../../Utility/localDatabase';

const AppDetails = () => {

    const data = useLoaderData();
    const { id, title, description, image, companyName, size, comments } = data;

    const ratingData = data.ratings;

    const [progress, setProgress] = useState(0);
    const [isDownloading, setIsDownloading] = useState(false);

    useEffect(() => {
        let interval;
        if (isDownloading) {

            const totalSteps = 100;
            const stepDuration = 5000 / totalSteps;

            interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setIsDownloading(false);

                        toast.success(`Installed successfully!`, {
                            id: 'download-toast',
                            style: {
                                borderRadius: '12px',
                                background: '#1e1e2e',
                                color: '#fff',
                                padding: '16px',
                                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
                            },
                            iconTheme: {
                                primary: '#10B981',
                                secondary: '#ffffff',
                            },
                        });

                        return 100;
                    }
                    return prev + 1;
                });
            }, stepDuration);
        }

        return () => clearInterval(interval);
    }, [isDownloading, title]);

    const handleInstallButtonClick = (id) => {
        
        const isAlreadyInstalled = storedAppsData(id);

        if (isAlreadyInstalled) {
            return;
        }

        setProgress(0);
        setIsDownloading(true);
    }

    return (
        <div className='p-5 md:p-15 lg:p-20 bg-[#F5F5F5]'>
            <div className='flex flex-col md:flex-row gap-6 md:gap-10'>
                <div className='flex-1'>
                    <img src={image} alt="" className='' />
                </div>
                <div className='flex-2'>
                    <h2 className='text-2xl font-bold md:text-3xl lg:text-5xl'>{title}</h2>
                    <p className='font-bold mt-2'>Developed by <span className='text-purple-500'>{companyName}</span></p>
                    <hr className='border-gray-300 my-4 md:my-5' />
                    <div className='flex justify-between md:justify-normal md:gap-15'>
                        <div className='space-y-1.5'>
                            <img src={downloadIcon} alt="" />
                            <p className='text-sm font-semibold'>Downloads</p>
                            <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl'>8M</h2>
                        </div>

                        <div className='space-y-1.5'>
                            <img src={starIcon} alt="" />
                            <p className='text-sm font-semibold'>Average Ratings</p>
                            <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl'>8M</h2>
                        </div>

                        <div className='space-y-1.5'>
                            <img src={likeIcon} alt="" />
                            <p className='text-sm font-semibold'>Total Reviews</p>
                            <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl'>8M</h2>
                        </div>

                    </div>

                    <div className="mt-8 flex flex-col gap-3">
                        <button 
                            onClick={() => handleInstallButtonClick(id)}
                            disabled={isDownloading}
                            className={`btn max-w-60 text-white transition-all ${
                                isDownloading ? 'btn-disabled bg-gray-400' : 'btn-success'
                            }`}
                        >
                            {isDownloading ? `Downloading... ${progress}%` : `Install Now (${size})`}
                        </button>

                        {isDownloading && (
                            <div className="w-full max-w-xs bg-gray-200 rounded-full h-2 overflow-hidden">
                                <div 
                                    className="bg-success h-full transition-all duration-75 rounded-full" 
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <hr className='border-gray-300 my-6 md:my-10' />

            <div>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold mb-5 ml-5'>Ratings</h1>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart layout='vertical' data={ratingData.slice().reverse()}>
                            <XAxis type="number" stroke="#9ca3af" tickLine={false} />

                            <YAxis
                                dataKey='name'
                                type="category"
                                width={70}
                                stroke="none"
                                tick={{ fill: '#4b5563', fontSize: 14, fontWeight: 500 }}
                            />

                            <Bar dataKey='count' fill="#8884d8" radius={[0, 4, 4, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <hr className='border-gray-300 my-6 md:my-10' />

            <div>
                <h2 className='text-2xl md:text-4xl font-bold mb-2'>Description</h2>
                <p className='text-justify'>{description}</p>
            </div>

            <div className='mt-5'>
                <h2 className='text-2xl md:text-4xl font-bold mb-2'>Comments</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-15 md:gap-y-6 mt-5'>
                    {
                        comments.map((comment, index) => <CommentCard key={index} comment={comment}></CommentCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AppDetails;