import React from 'react';
import { useLoaderData } from 'react-router';

const DetailsPage = () => {
    const partnerData = useLoaderData()
    console.log(partnerData);
    
    return (
        <div>
            <h1>Details page </h1>
        </div>
    );
};

export default DetailsPage;