import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomeProductCards from '../HomeProductCards/HomeProductCards';
import './HomeProduct.css'

const HomeProduct = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://fierce-hollows-12616.herokuapp.com/addProduct')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])



    return (
        <div >
            <Container>
                <h1 className="section-header fw-bold stylish-front pt-5"> Exclusive Toys </h1>
                <hr className="w-25 mx-auto pb-0 mb-0" />
                <p className="text-success"> Find Here our Exclusive Toys  </p>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        toys.slice(0, 6).map(toy => <HomeProductCards
                            key={toy._id}
                            toy={toy}
                        ></HomeProductCards>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HomeProduct;