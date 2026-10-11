import React from 'react';
import googleAppIcon from '../../assets/Google Store.png';
import appStoreIcon from '../../assets/App Store.png';
import heroIcon from '../../assets/hero.png';
import { Link, useLoaderData } from 'react-router';
import HomeAppCards from '../AppsCards/HomeAppCards';

const Home = () => {

    const appsData = useLoaderData();

    return (
        <div className='bg-[#F5F5F5]'>
            <section className='px-2 pt-3 md:pt-15 md:px-15 lg:px-20 lg:pt-20'>
                <h2 className='text-2xl text-center font-bold md:text-4xl lg:text-6xl'>We Build<br /><span className='text-purple-700'>Productive</span> Apps</h2>

                <p className='text-center mt-2 text-gray-500 text-sm md:text-xl'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='my-5 md:my-10 flex justify-center gap-3 md:gap-5'>
                    <button className="btn btn-outline flex items-center lg:px-10">
                        <img src={googleAppIcon} alt="" className='w-7 h-7' />
                        <p>Google Play</p>
                    </button>

                    <button className="btn btn-outline flex items-center lg:px-10">
                        <img src={appStoreIcon} alt="" className='w-7 h-7' />
                        <p>Google Play</p>
                    </button>
                </div>

                <div className='flex justify-center'>
                    <img src={heroIcon} alt="" />
                </div>
            </section>
            <section>
                <div className='bg-linear-60 from-[#652Fe3] to-purple-500 py-4 md:p-25'>
                    <h2 className='text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl'>Trusted by Millions,<br className='lg:hidden' />Built for You</h2>

                    <div className='flex flex-col gap-6 md:gap-8 lg:gap-15 items-center justify-center md:flex-row mt-3 md:mt-15'>
                        <div className='gap-2.5 shadow-xl border w-3/4 py-3 rounded-xl border-gray-400 flex flex-col justify-center items-center hover:scale-105 transition-all ease-in-out duration-200'>
                            <p className='text-gray-300 text-lg'>Total Downloads</p>
                            <h1 className='text-white font-bold text-6xl'>29.6M</h1>
                            <p className='text-gray-300 text-lg'>21% More Than Last Month</p>
                        </div>

                        <div className='gap-2.5 shadow-xl border w-3/4 py-3 rounded-xl border-gray-400 flex flex-col justify-center items-center hover:scale-105 transition-all ease-in-out duration-200'>
                            <p className='text-gray-300 text-lg'>Total Reviews</p>
                            <h1 className='text-white font-bold text-6xl'>906K</h1>
                            <p className='text-gray-300 text-lg'>46% More Than Last Month</p>
                        </div>

                        <div className='gap-2.5 shadow-xl border w-3/4 py-3 rounded-xl border-gray-400 flex flex-col justify-center items-center hover:scale-105 transition-all ease-in-out duration-200'>
                            <p className='text-gray-300 text-lg'>Active Apps</p>
                            <h1 className='text-white font-bold text-6xl'>132+</h1>
                            <p className='text-gray-300 text-lg'>21 More Will Launch</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='px-3 py-4 lg:p-20'>
                <div className='mb-6 space-y-2 md:space-y-5 md:mb-10'>
                    <h1 className='text-center text-4xl font-bold lg:text-6xl'>Trending Apps</h1>
                    <p className='text-sm text-center text-gray-400 md:text-xl'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {
                        appsData.map(data=> <HomeAppCards key={data.id} data={data}></HomeAppCards>)
                    }
                </div>

                <div className='flex justify-center mt-8 md:mt-15'>
                    <Link to='/apps' className='px-10 py-3 rounded-lg text-white font-bold bg-linear-46 from-purple-700 to-purple-400 hover:scale-105 transition-all duration-150'>Show All</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;