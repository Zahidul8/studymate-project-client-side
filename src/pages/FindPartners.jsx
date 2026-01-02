import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FindPartnerCard from '../components/findPartnerCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { Link } from 'react-router';

const FindPartners = () => {

    const [partnerData, setPartnerData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refecth, setRefetch] = useState(false);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        axios.get('https://studymate-project-server.vercel.app/partners')
            .then(data => {
                setPartnerData(data.data)
                setLoading(false);
            })
    }, [refecth])


    const handleSearchPartner = (e) => {
        e.preventDefault();
        setLoading(true)
        axios.get(`https://studymate-project-server.vercel.app/search?search=${searchText}`)
            .then(data => {
                console.log(data.data);
                setPartnerData(data.data)
                setLoading(false);

            })


    }


    const handleSortedPartner = (order) => {
        setLoading(true);
        axios.get(`https://studymate-project-server.vercel.app/search?search=${searchText}&sort=${order}`)
            .then(data => {
                console.log(data.data);
                setPartnerData(data.data)
                setLoading(false);

            })


    }


    return (
        <div>
            <title>StudyMate-Find Partner</title>

            <h2 className='text-center mt-10 section-title  font-semibold text-primary'>Find Your Study Partner</h2>
            {/* Search and sort */}

            <div className='mt-3 mb-10 flex flex-col-reverse sm:flex-row gap-6  justify-between items-center'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-primary m-1">
                        Sort By Experience
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-1  w-52 p-2 shadow"
                    >
                        <li>
                            <button onClick={() => handleSortedPartner("asc")}>
                                Low → High
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleSortedPartner("desc")}>
                                High → Low
                            </button>
                        </li>
                    </ul>
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
                                <input type="search"
                                className='bg-transparent'
                                    onChange={(e) => setSearchText(e.target.value)}
                                    name='search'
                                    placeholder="Search with subject" />
                            </label>
                            <button className="btn btn-primary join-item">Search</button>
                        </div>
                    </form>
                </div>

            </div>

            {
                loading ? <LoadingSpinner></LoadingSpinner> : partnerData.length === 0 ? <div className='text-center py-18'>
                    <h2 className='text-center text-4xl font-semibold text-primary'>No study partner found</h2>
                    <button onClick={() => setRefetch(!refecth)} className='btn btn-primary my-10'>See all</button >
                </div> : <section className='my-10'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {
                            partnerData.map(data => <FindPartnerCard key={data._id} data={data}></FindPartnerCard>)
                        }
                    </div>
                </section>
            }





        </div>
    );
};

export default FindPartners;