import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FindPartnerCard from '../components/findPartnerCard';

const FindPartners = () => {

    const [partnerData, setPartnerData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/partners')
            .then(data => {
                setPartnerData(data.data)
            })
    }, [])

    const handleSearchPartner =(e) => {
        e.preventDefault();
        const searchText = e.target.search.value;
        console.log(searchText)
        
        axios.get(`http://localhost:3000/search?search=${searchText}`)
        .then(data => {
            console.log(data.data);
            setPartnerData(data.data)
            
        })


    }
    return (
        <div>

            <h2 className='text-center mt-10 text-4xl font-semibold text-primary'>Find Your Study Partner</h2>
            {/* Search and sort */}

            <div className='mt-3 mb-10 flex  justify-between'>
                <div>
                    <button className='btn btn-primary'> Sort By Experience Level</button>
                </div>
                <div>
                    <form onSubmit={handleSearchPartner}>
                        <div className="join">
                            <label className="input validator join-item">
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
                                <input type="search" name='search' placeholder="Search" />
                            </label>
                            <button className="btn btn-primary join-item">Search</button>
                        </div>
                    </form>
                </div>

            </div>
            <section className='my-10'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        partnerData.map(data => <FindPartnerCard key={data._id} data={data}></FindPartnerCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default FindPartners;