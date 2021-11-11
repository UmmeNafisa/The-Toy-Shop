import React from 'react';
import { useParams } from 'react-router';
import ShopNavbar from '../../Shared/ShopNavbar/ShopNavbar'
import ShopFooter from '../../Shared/ShopFooter/ShopFooter'
import { useAuth } from '../../../hooks/useAuth'

const Purchase = () => {
    const { toyId } = useParams();
    const { user } = useAuth();


    return (
        <>
            <ShopNavbar></ShopNavbar>
            <div>
                hello from purchase
            </div>

            <ShopFooter></ShopFooter>
        </>
    );
};

export default Purchase;