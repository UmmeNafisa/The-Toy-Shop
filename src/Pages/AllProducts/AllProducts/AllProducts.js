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
                <h1 className="section-header fw-bold stylish-front pt-5"> Exclusive Toys </h1>
                <hr className="w-25 mx-auto pb-0 mb-1" />
                <p className="text-success"> Find Here our Exclusive Toys  </p>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        toys.map(toy => <HomeProductCards
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