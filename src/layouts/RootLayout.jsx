import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';

const RootLayout = () => {

    const navigation = useNavigation();
    return (
        <div className=''>
            <header>
                <Navbar></Navbar>
            </header>

            <main className='max-w-11/12 xl:max-w-10/12 mx-auto min-h-[calc(100vh-351px)] mt-30'>
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