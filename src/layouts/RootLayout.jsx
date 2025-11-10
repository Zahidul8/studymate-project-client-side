import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';

const RootLayout = () => {

    const navigation = useNavigation();
    return (
        <div className='bg-base-1000'>
            <header>
                <Navbar></Navbar>
            </header>

            <main className='max-w-10/12 mx-auto min-h-[calc(100vh-351px)]'>
            {
                navigation.state === "loading"? <LoadingSpinner></LoadingSpinner>: <Outlet></Outlet>
            }
           
            </main>
            <footer className='bg-[#0C2B4E]'>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default RootLayout;  