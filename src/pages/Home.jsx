import React, { Suspense } from 'react';
import Carousel from '../components/Carousel';
import TopStudyPartner from '../components/TopStudyPartner';
import { useLoaderData } from 'react-router';



const Home = () => {

    const partnerData = useLoaderData()

    return (
        <div>
            {/* Carousel section  */}
           <section>
            <Carousel></Carousel>
           </section>

        {/* top Study partners section  */}
           <section  className='my-[80px]'>

            <h2 className='text-center text-4xl font-semibold mb-4'>Top Study Partners</h2>
            <div className='grid grid-cols-3 gap-6'>

           {
               partnerData?.map(partner => <TopStudyPartner key={partner._id} partner={partner}></TopStudyPartner>)
            }
            </div>
           </section>
        </div>
    );
};

export default Home;