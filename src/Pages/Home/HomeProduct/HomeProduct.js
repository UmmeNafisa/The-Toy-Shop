import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomeProductCards from '../HomeProductCards/HomeProductCards';

const HomeProduct = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addProduct')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    console.log(toys);

    return (
        <Container>
            <h2 className="text-color fw-bold"> Exclusive Toys </h2>
            <hr className="w-25 mx-auto pb-0 mb-0" />
            <p className="text-success"> Find Here our Exclusive Toy  </p>
            <Row xs={2} md={3} lg={3} className="g-4">
                {
                    toys.slice(0, 6).map(toy => <HomeProductCards
                        key={toy._id}
                        toy={toy}
                    ></HomeProductCards>)
                }

            </Row>
        </Container>
    );
};

export default HomeProduct;