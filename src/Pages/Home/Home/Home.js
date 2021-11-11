import React from 'react';
import ShopFooter from '../../Shared/ShopFooter/ShopFooter';
import ShopNavbar from '../../Shared/ShopNavbar/ShopNavbar';
import HomeProduct from '../HomeProduct/HomeProduct';



const Home = () => {
    return (
        <div>
            <ShopNavbar></ShopNavbar>
            <HomeProduct></HomeProduct>
            <ShopFooter></ShopFooter>
        </div>
    );
};

export default Home;