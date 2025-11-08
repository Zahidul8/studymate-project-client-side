import React from "react";

const Footer = () => {
  return (
    <footer >
        <div className="footer mx-auto sm:footer-horizontal max-w-6xl text-base-100 p-10 ">

      {/* Project Info */}
      <nav>
        <h6 className="footer-title">
          <span className="text-2xl font-bold">StudyMate</span> — Find Your Perfect Study Partner
        </h6>
        <p className="max-w-[450px] text-sm ">
          StudyMate helps students connect with the perfect study partners. Find classmates who share your goals,
          subjects, and schedule — making learning more engaging, productive, and fun.
        </p>
      </nav>

     
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </nav>

      
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          {/* Twitter */}
         <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className=""
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 1227"
            width="24"
            height="24"
            className="fill-current"
            >
            <path d="M714.163 519.284 1160.89 0H1054.44L667.137 450.887 363.435 0H0L466.98 681.821 0 1226.85H106.451L516.44 751.066 836.565 1226.85H1200L714.137 519.284H714.163ZM561.51 686.081 522.85 631.238 144.931 80.14H311.434L613.958 519.284 652.617 574.126 1064.04 1146.71H897.537L561.51 686.107V686.081Z" />
          </svg>
        </a>

         
          <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-transparent"
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
            >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.773.13 4.632.428 3.678 1.382 2.724 2.336 2.426 3.477 2.368 4.756.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.279.356 2.42 1.31 3.374.954.954 2.095 1.252 3.374 1.31C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.279-.058 2.42-.356 3.374-1.31.954-.954 1.252-2.095 1.31-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.279-.356-2.42-1.31-3.374-.954-.954-2.095-1.252-3.374-1.31C15.668.013 15.259 0 12 0z" />
            <path d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8a3.999 3.999 0 0 1 0 8z" />
            <circle cx="18.406" cy="5.594" r="1.44" />
          </svg>
        </a>

     
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 
              1.115-1.333h2.885v-5h-3.808c-3.596 
              0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>

          
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              >
              <path d="M4.98 3.5A2.5 2.5 0 1 1 4.98 8.5 2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM9 
              9h3.8v1.6h.06c.53-1 1.82-2.06 
              3.75-2.06 4 0 4.74 2.6 
              4.74 5.98V21H18v-5.18c0-1.24-.02-2.83-1.72-2.83-1.72 
              0-1.98 1.35-1.98 2.75V21H9V9z"></path>
            </svg>
          </a>
        </div>
      </nav>

              </div>
      
      <div className="footer-center text-center mt-8 w-full border-t border-base-100 text-white pt-4 text-sm ">
        © 2025 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
