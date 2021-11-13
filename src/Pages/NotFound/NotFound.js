import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found-bg">
            <h1 className="section-header fw-bold stylish-front pt-5"> Are you lost ...???</h1>
            <Link to="/home"> <Button className="btn-all"> Back to Home </Button> </Link>
        </div>
    );
};

export default NotFound;