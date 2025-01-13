'use client'
import { useParams } from 'next/navigation';
import React from 'react';
const page: React.FC = () => {
    const {id } = useParams();
    return (
        <div>
            <h1>User Page</h1>
            <p>User ID: {id}</p>
        </div>
    );
};

export default page;