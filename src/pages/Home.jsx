import React, { Suspense } from 'react';
import Carousel from '../components/Carousel';
import TopStudyPartner from '../components/TopStudyPartner';
import { useLoaderData } from 'react-router';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import LoadingSpinner from '../components/LoadingSpinner';
import Features from '../components/Features';
import BlogPreview from '../components/BlogPreview';
import FAQ from '../components/FAQ';
import NewsletterCTA from '../components/NewsletterCTA';

import Statistics from '../components/Statistics';
import SuccessStories from '../components/SuccessStories';


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
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>

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

           {/* Features seciton  */}
           <section className='my-20'>
            <Features></Features>
           </section>
           {/* Features seciton  */}
           <section className='my-20'>
            <BlogPreview></BlogPreview>
           </section>

           {/* statistics sections  */}
           <section className='my-20'>
           <Statistics></Statistics>
           </section>
           {/* successtory sections  */}
           <section className='my-20 sm:my-0'>
           <SuccessStories></SuccessStories>
           </section>

           {/*faq section */}
           <section className='my-20 md:my-0'>
            <FAQ></FAQ>
           </section>

            {/* newsLsterCTA section  */}
           <section className='my-20 md:my-0'>
            <NewsletterCTA></NewsletterCTA>
           </section>

           
        </div>
    );
};

export default Home;