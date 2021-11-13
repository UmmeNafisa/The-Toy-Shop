import React from 'react';
import './HomeDecor.css'

const HomeDecore = () => {
    return (
        <>
            <div className="home-decor-bg mt-3" id="decorToys">
            </div>
            <div className="decor-box mx-auto pb-5">
                <h1 className="decor-header fw-bold stylish-front pt-5"> Kids Room Decor Toys </h1>
                <p className="text-success"> We concern about Your kids happiness </p>
                <button className="discover-btn"> DISCOVER! </button>
            </div>
        </>
    );
};

export default HomeDecore;