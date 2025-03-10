'use client'
import React from 'react';

const ErrorPage: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Oops! Something went wrong.</h1>
            <p>We're sorry, but the page you were looking for doesn't exist.</p>
            <a href="/">Go back to the homepage</a>
        </div>
    );
};

export default ErrorPage;