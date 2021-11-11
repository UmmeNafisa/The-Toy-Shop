import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1> 404 Error .. Page not found</h1>
            <h3> Are you lost ????  </h3>
            <Link to="/home"> Back to Home </Link>
        </div>
    );
};

export default NotFound;