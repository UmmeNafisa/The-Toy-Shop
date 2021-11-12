import React from 'react';
import ShopFooter from '../../Shared/ShopFooter/ShopFooter';
import ShopNavbar from '../../Shared/ShopNavbar/ShopNavbar';
import Banner from '../Banner/Banner';
import HomeDecore from '../HomeDecor/HomeDecore';
import HomeProduct from '../HomeProduct/HomeProduct';
import ReviewDetails from '../ReviewDetails/ReviewDetails';



const Home = () => {
    return (
        <div>
            <ShopNavbar></ShopNavbar>
            <Banner></Banner>
            <HomeProduct></HomeProduct>
            <HomeDecore></HomeDecore>
            <ReviewDetails></ReviewDetails>
            <ShopFooter></ShopFooter>
        </div>
    );
};

export default Home;