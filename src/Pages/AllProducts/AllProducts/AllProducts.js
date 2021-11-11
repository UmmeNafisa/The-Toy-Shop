import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomeProductCards from '../../Home/HomeProductCards/HomeProductCards';
import ShopNavbar from '../../Shared/ShopNavbar/ShopNavbar'
import ShopFooter from '../../Shared/ShopFooter/ShopFooter'

const AllProducts = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addProduct')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <>
            <ShopNavbar></ShopNavbar>
            <Container>
                <h1> total product {toys.length}</h1>
                <Row xs={2} md={3} lg={3} className="g-4">
                    {
                        toys.slice(0, 6).map(toy => <HomeProductCards
                            key={toy._id}
                            toy={toy}
                        ></HomeProductCards>)
                    }

                </Row>
            </Container>

            <ShopFooter></ShopFooter>
        </>
    );
};

export default AllProducts;