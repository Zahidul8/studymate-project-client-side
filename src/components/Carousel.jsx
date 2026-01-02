import React from "react";
import { Link } from "react-router"; // Make sure you use react-router
import studyImage1 from '../assets/study-image-1.jpg'
import studyImage2 from '../assets/studyimage2.jpg'
import studyImage3 from '../assets/study-iamge-3.jpg'
import studyImage4 from '../assets/study-iamge-4.jpg'
import studyImage5 from '../assets/study-iamge-5.jpg'

const Carousel = () => {
  return (
    <div className="flex justify-center items-center -mt-13">
      <div className="carousel max-w-full max-h-[700px] shadow-lg rounded-b-lg md:rounded-b-2xl">
        
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={studyImage1}
            className="w-full object-cover"
            alt="Find study partner"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white text-center px-6">
            <h2 className="carousel-heading font-bold mb-3 text-3xl md:text-5xl">
              Find Your Perfect Study Partner
            </h2>
            <p className="max-w-xl carousel-subtitle mb-6">
              Connect with learners who share your goals, subjects, and schedule — study smarter together.
            </p>
            {/* CTA Button */}
            <Link
              to="/findPartners"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary-focus transition duration-300"
            >
              Find Study Partner
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
            <a href="#slide5" className="btn btn-circle w-[25px] md:w-10 h-[25px] md:h-10">❮</a>
            <a href="#slide2" className="btn btn-circle w-[25px] md:w-10 h-[25px] md:h-10">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={studyImage4} className="w-full object-cover" alt="Collaborate and learn" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white text-center px-6">
            <h2 className="carousel-heading font-bold mb-3 text-3xl md:text-5xl">
              Collaborate and Learn
            </h2>
            <p className="max-w-xl carousel-subtitle mb-6">
              Form study groups, share resources, and achieve more through teamwork and motivation.
            </p>
            <Link
              to="/findPartners"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary-focus transition duration-300"
            >
              Find Study Partner
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle w-[25px] md:w-10 h-[25px] md:h-10">❮</a>
            <a href="#slide3" className="btn btn-circle w-[25px] md:w-10 h-[25px] md:h-10">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src={studyImage5} className="w-full object-cover" alt="Grow together" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white text-center px-6">
            <h2 className="carousel-heading font-bold mb-3 text-3xl md:text-5xl">
              Grow Together
            </h2>
            <p className="max-w-xl carousel-subtitle mb-6">
              Boost your academic success and stay motivated by learning with peers who inspire you.
            </p>
            <Link
              to="/findPartners"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary-focus transition duration-300"
            >
              Find Study Partner
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle w-[25px] md:w-10 h-[25px] md:h-10">❮</a>
            <a href="#slide4" className="btn btn-circle w-[25px] md:w-10 h-[25px] md:h-10">❯</a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img src={studyImage2} className="w-full object-cover" alt="Organized learning" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white text-center px-6">
            <h2 className="carousel-heading font-bold mb-3 text-3xl md:text-5xl">
              Stay Organized
            </h2>
            <p className="max-w-xl carousel-subtitle mb-6">
              Manage your study sessions efficiently — schedule, track, and review your progress.
            </p>
            <Link
              to="/findPartners"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary-focus transition duration-300"
            >
              Find Study Partner
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle w-[25px] md:w-10 h-[25px] md:h-10">❮</a>
            <a href="#slide5" className="btn btn-circle w-[25px] md:w-10 h-[25px] md:h-10">❯</a>
          </div>
        </div>

        {/* Slide 5 */}
        <div id="slide5" className="carousel-item relative w-full">
          <img src={studyImage3} className="w-full object-cover" alt="Motivated learners" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white text-center px-6">
            <h2 className="carousel-heading font-bold mb-3 text-3xl md:text-5xl">
              Learn Without Limits
            </h2>
            <p className="max-w-xl carousel-subtitle mb-6">
              StudyMate empowers you to explore, connect, and achieve — your learning journey starts here.
            </p>
            <Link
              to="/findPartners"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary-focus transition duration-300"
            >
              Find Study Partner
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle w-[25px] md:w-10 h-[25px] md:h-10">❮</a>
            <a href="#slide1" className="btn btn-circle w-[25px] md:w-10 h-[25px] md:h-10">❯</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Carousel;
