import React from 'react';
import { PropagateLoader } from 'react-spinners';


const LoadingSpinner = () => {
    return (
        <div className=' min-h-[calc(100vh-351px)] flex justify-center items-center'>
           <PropagateLoader color='#00BFFF' />
          
        </div>
    );
};

export default LoadingSpinner;