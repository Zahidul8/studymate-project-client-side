import React, { Suspense } from 'react';
import Carousel from '../components/Carousel';
import TopStudyPartner from '../components/TopStudyPartner';
import { useLoaderData } from 'react-router';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import LoadingSpinner from '../components/LoadingSpinner';


const Home = () => {

    const partnerData = useLoaderData()

    return (
        <div>
            {/* Carousel section  */}
           <section>
            <Carousel></Carousel>
           </section>

        {/* top Study partners section  */}
           <section  className='my-10 md:my-20'>

            <h2 className='text-primary text-center section-title font-semibold mb-4'>Top Study Partners</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

           {
               partnerData?.map(partner => <TopStudyPartner key={partner._id} partner={partner}></TopStudyPartner>)
            }
            </div>
           </section>

           {/* how it works section  */}
           <section className='my-20'>
           <HowItWorks></HowItWorks>
           </section>

           {/* testimonials seciton  */}
           <section className='my-20'>
            <Testimonials></Testimonials>
           </section>

           
        </div>
    );
};

export default Home;