import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FindPartnerCard from '../components/findPartnerCard';
import LoadingSpinner from '../components/LoadingSpinner';

const FindPartners = () => {
  const [partnerData, setPartnerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  // Fetch data
  const fetchPartners = async () => {
    setLoading(true);
    try {
      const url = searchText
        ? `https://studymate-project-server.vercel.app/search?search=${searchText}${sortOrder ? `&sort=${sortOrder}` : ''}`
        : 'https://studymate-project-server.vercel.app/partners';

      const res = await axios.get(url);
      setPartnerData(res.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPartners();
  }, [refetch, searchText, sortOrder]);

  // Search handler
  const handleSearchPartner = (e) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page
    fetchPartners();
  };

  // Sort handler
  const handleSortedPartner = (order) => {
    setSortOrder(order);
    setCurrentPage(1); // Reset to first page
  };

  // Pagination calculation
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = partnerData.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(partnerData.length / cardsPerPage);

  return (
    <div>
      <title>StudyMate-Find Partner</title>

      <h2 className="text-center mt-10 section-title font-semibold text-primary">
        Find Your Study Partner
      </h2>

      {/* Search and sort */}
      <div className="mt-3 mb-10 flex flex-col-reverse sm:flex-row gap-6 justify-between items-center">
        {/* Sort */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-primary m-1">
            Sort By Experience
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow"
          >
            <li>
              <button onClick={() => handleSortedPartner('asc')}>Low → High</button>
            </li>
            <li>
              <button onClick={() => handleSortedPartner('desc')}>High → Low</button>
            </li>
          </ul>
        </div>

        {/* Search */}
        <div>
          <form onSubmit={handleSearchPartner}>
            <div className="join">
              <input
                type="search"
                className="input input-bordered join-item"
                placeholder="Search with subject"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="btn btn-primary join-item">Search</button>
            </div>
          </form>
        </div>
      </div>

      {/* Cards */}
      {loading ? (
        <LoadingSpinner />
      ) : currentCards.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-4xl font-semibold text-primary">No study partner found</h2>
          <button onClick={() => setRefetch(!refetch)} className="btn btn-primary my-10">
            See all
          </button>
        </div>
      ) : (
        <>
          <section className="my-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentCards.map((data) => (
                <FindPartnerCard key={data._id} data={data} />
              ))}
            </div>
          </section>

          {/* Pagination Buttons */}
          <div className="flex justify-center mt-8">
            <div className="join">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  className={`join-item btn ${currentPage === num ? 'btn-primary' : ''}`}
                  onClick={() => setCurrentPage(num)}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FindPartners;
