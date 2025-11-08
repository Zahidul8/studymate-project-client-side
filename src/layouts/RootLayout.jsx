import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div className='bg-[#F5E5E1] '>
            <header>
                <Navbar></Navbar>
            </header>

            <main className='max-w-10/12 mx-auto'>
            <Outlet></Outlet>
            </main>
            <footer className='bg-[#0C2B4E]'>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default RootLayout;  